"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAnalyticsServiceWrapper = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const email_analytics_service_1 = require("./email-analytics-service");
const fetch_mailgun_events_1 = require("./fetch-mailgun-events");
class EmailAnalyticsServiceWrapper {
    #logName;
    #config;
    #metrics;
    #service;
    #fetching = false;
    #restoredSchedule = false;
    #fetchOpenedEvents = true;
    get #logPrefix() {
        return `[EmailAnalytics:${this.#logName}]`;
    }
    get #backgroundJobName() {
        switch (this.#logName) {
            case 'newsletters':
                return 'email-analytics-fetch-latest';
            case 'automations':
                return 'email-analytics-automation-fetch-latest';
            case 'gifts':
                return 'email-analytics-gift-fetch-latest';
            default:
                return `email-analytics-${this.#logName}-fetch-latest`;
        }
    }
    constructor({ logName }) {
        this.#logName = logName;
    }
    init({ config, domainEvents, event, queries, mailgunTags, jobNames, cursorSeed, createEventProcessor, metrics, settingsCache, }) {
        if (this.#service) {
            return;
        }
        this.#config = config;
        this.#metrics = metrics;
        this.#fetchOpenedEvents = Boolean(cursorSeed.eventColumns.opened);
        this.#service = new email_analytics_service_1.EmailAnalyticsService({
            fetchEvents: (options) => (0, fetch_mailgun_events_1.fetchMailgunEvents)({ ...options, config, settings: settingsCache, tags: mailgunTags }),
            queries,
            jobNames,
            cursorSeed,
            createEventProcessor,
        });
        // Log the processing mode on initialization
        const batchProcessingEnabled = this.#config.get('emailAnalytics:batchProcessing');
        logging_1.default.info(`${this.#logPrefix} Initialized with ${batchProcessingEnabled ? 'BATCHED' : 'SEQUENTIAL'} processing mode`);
        // We currently cannot trigger a non-offloaded job from the job manager
        // So the email analytics jobs simply emits an event.
        domainEvents.subscribe(event, async () => {
            await this.startFetch();
        });
    }
    get service() {
        const result = this.#service;
        if (!result) {
            throw new errors_1.default.InternalServerError({
                message: 'EmailAnalyticsServiceWrapper is not initialized with service',
            });
        }
        return result;
    }
    #getConfig() {
        const result = this.#config;
        if (!result) {
            throw new errors_1.default.InternalServerError({
                message: 'EmailAnalyticsServiceWrapper is not initialized with config',
            });
        }
        return result;
    }
    _logJobCompletion(jobType, fetchResult, totalDurationMs) {
        const config = this.#getConfig();
        const { eventCount, apiPollingTimeMs, processingTimeMs, aggregationTimeMs, emailAggregationTimeMs, memberAggregationTimeMs, result, } = fetchResult;
        if (eventCount === 0) {
            return;
        }
        const throughput = totalDurationMs > 0 ? eventCount / (totalDurationMs / 1000) : 0;
        const apiPercent = totalDurationMs > 0 ? Math.round((apiPollingTimeMs / totalDurationMs) * 100) : 0;
        const processingPercent = totalDurationMs > 0 ? Math.round((processingTimeMs / totalDurationMs) * 100) : 0;
        const aggregationPercent = totalDurationMs > 0 ? Math.round((aggregationTimeMs / totalDurationMs) * 100) : 0;
        const batchMode = config.get('emailAnalytics:batchProcessing') ? 'BATCHED' : 'SEQUENTIAL';
        const logMessage = [
            `[Background Job] ${this.#backgroundJobName} processed ${jobType} | ${this.#logPrefix}`,
            `${eventCount} events in ${(totalDurationMs / 1000).toFixed(1)}s (${throughput.toFixed(2)} events/s)`,
            `Mode: ${batchMode}`,
            `Timings: API ${(apiPollingTimeMs / 1000).toFixed(1)}s (${apiPercent}%) / Processing ${(processingTimeMs / 1000).toFixed(1)}s (${processingPercent}%) / Aggregation ${(aggregationTimeMs / 1000).toFixed(1)}s (${aggregationPercent}%) [Email ${(emailAggregationTimeMs / 1000).toFixed(1)}s / Member ${(memberAggregationTimeMs / 1000).toFixed(1)}s]`,
            `Events: opened=${result.opened} delivered=${result.delivered} failed=${result.permanentFailed + result.temporaryFailed} unprocessable=${result.unprocessable}`,
        ].join(' | ');
        logging_1.default.info({
            system: {
                event: 'job.completed',
                job_type: this.#backgroundJobName,
                task: jobType,
                event_count: eventCount,
                duration_ms: totalDurationMs,
            },
        }, logMessage);
        // We're only concerned with open throughput as this is displayed to users and is most sensitive to being up to date
        if (jobType === 'latest-opened') {
            const openThroughputEnabled = config.get('emailAnalytics:metrics:openThroughput:enabled');
            const openThroughputThreshold = config.get('emailAnalytics:metrics:openThroughput:threshold') || 0;
            if (openThroughputEnabled && eventCount >= openThroughputThreshold) {
                const metricName = this.#logName === 'newsletters'
                    ? 'email-analytics-open-throughput'
                    : `email-${this.#logName}-analytics-open-throughput`;
                const metrics = this.#metrics;
                if (!metrics) {
                    throw new errors_1.default.InternalServerError({
                        message: 'EmailAnalyticsServiceWrapper is not initialized with metrics',
                    });
                }
                metrics.metric(metricName, {
                    value: throughput,
                    events: eventCount,
                    duration: totalDurationMs,
                });
            }
        }
    }
    async fetchLatestOpenedEvents({ maxEvents = Infinity, } = {}) {
        const config = this.#getConfig();
        const beginTimestamp = await this.service.getLastOpenedEventTimestamp();
        const lagMinutes = (Date.now() - beginTimestamp.getTime()) / 60000;
        const lagThreshold = config.get('emailAnalytics:openedJobLagWarningMinutes');
        // NOTE: We only update the begin timestamp when we process events, so there's cases where we can have a false positive
        //  - Ghost or Mailgun outages
        //  - Lack of actual email activity
        if (lagThreshold && lagMinutes > lagThreshold) {
            logging_1.default.warn(`${this.#logPrefix} Opened events processing is ${lagMinutes.toFixed(1)} minutes behind (threshold: ${lagThreshold})`);
        }
        const fetchStartedAt = Date.now();
        const fetchResult = await this.service.fetchLatestOpenedEvents({ maxEvents });
        const totalDuration = Date.now() - fetchStartedAt;
        this._logJobCompletion('latest-opened', fetchResult, totalDuration);
        return fetchResult.eventCount;
    }
    async fetchLatestNonOpenedEvents({ maxEvents = Infinity, } = {}) {
        const fetchStartedAt = Date.now();
        const fetchResult = await this.service.fetchLatestNonOpenedEvents({ maxEvents });
        const totalDuration = Date.now() - fetchStartedAt;
        this._logJobCompletion('latest', fetchResult, totalDuration);
        return fetchResult.eventCount;
    }
    async fetchMissing({ maxEvents = Infinity } = {}) {
        const fetchStartedAt = Date.now();
        const fetchResult = await this.service.fetchMissing({ maxEvents });
        const totalDuration = Date.now() - fetchStartedAt;
        this._logJobCompletion('missing', fetchResult, totalDuration);
        return fetchResult.eventCount;
    }
    async fetchScheduled({ maxEvents }) {
        if (maxEvents < 300) {
            return 0;
        }
        const fetchStartedAt = Date.now();
        const fetchResult = await this.service.fetchScheduled({ maxEvents });
        const totalDuration = Date.now() - fetchStartedAt;
        this._logJobCompletion('scheduled', fetchResult, totalDuration);
        return fetchResult.eventCount;
    }
    async startFetch() {
        const startedAt = Date.now();
        if (!this.#restoredSchedule) {
            this.#restoredSchedule = true;
            try {
                await this.service.restoreScheduled();
            }
            catch (e) {
                logging_1.default.error(e, `[Background Job] ${this.#backgroundJobName} failed while restoring scheduled events after ${Date.now() - startedAt}ms`);
                throw e;
            }
        }
        if (this.#fetching) {
            logging_1.default.info(`[Background Job] ${this.#backgroundJobName} skipped because a fetch is already running`);
            return;
        }
        this.#fetching = true;
        // NOTE: Data shows we can process ~2500 events per minute on Pro for a large-ish db (150k members).
        //       This can vary locally, but we should be conservative with the number of events we fetch.
        try {
            // Prioritize opens since they are the most important (only data directly displayed to users)
            const c1 = this.#fetchOpenedEvents
                ? await this.fetchLatestOpenedEvents({ maxEvents: 10000 })
                : 0;
            if (c1 >= 10000) {
                this._restartFetch('high opened event count');
                return;
            }
            // Set limits on how much we fetch without checkings for opened events. During surge events (following newsletter send)
            //  we want to make sure we don't spend too much time collecting delivery data.
            const c2 = await this.fetchLatestNonOpenedEvents({ maxEvents: 10000 - c1 });
            const c3 = await this.fetchMissing({ maxEvents: 10000 - c1 - c2 });
            // Always restart immediately instead of waiting for the next scheduled job if we're fetching a lot of events
            if (c1 + c2 + c3 > 10000) {
                this._restartFetch('high event count');
                return;
            }
            // Only backfill if we're not currently fetching a lot of events
            const c4 = await this.fetchScheduled({ maxEvents: 10000 });
            if (c4 > 0) {
                this._restartFetch('scheduled backfill');
                return;
            }
            logging_1.default.info(`[Background Job] ${this.#backgroundJobName} completed in ${Date.now() - startedAt}ms with ${c1 + c2 + c3 + c4} events | ${this.#logPrefix}`);
            this.#fetching = false;
        }
        catch (e) {
            logging_1.default.error(e, `[Background Job] ${this.#backgroundJobName} failed after ${Date.now() - startedAt}ms`);
            // Log again only the error, otherwise we lose the stack trace
            logging_1.default.error(e);
        }
        this.#fetching = false;
    }
    _restartFetch(reason) {
        this.#fetching = false;
        logging_1.default.info(`[Background Job] ${this.#backgroundJobName} continuing due to ${reason}`);
        this.startFetch();
    }
}
exports.EmailAnalyticsServiceWrapper = EmailAnalyticsServiceWrapper;
