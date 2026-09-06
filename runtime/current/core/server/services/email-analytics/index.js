"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.gifts = exports.automations = exports.newsletters = void 0;
const email_analytics_service_wrapper_1 = require("./email-analytics-service-wrapper");
// @ts-expect-error This module lacks type definitions.
const newsletter_email_analytics_batch_processor_1 = require("./newsletter-email-analytics-batch-processor");
// @ts-expect-error This module lacks type definitions.
const newsletter_email_analytics_batch_processor_2 = require("./newsletter-email-analytics-batch-processor");
// @ts-expect-error This module lacks type definitions.
const newsletter_email_event_storage_1 = __importDefault(require("../email-service/newsletter-email-event-storage"));
// @ts-expect-error This module lacks type definitions.
const email_event_processor_1 = __importDefault(require("../email-service/email-event-processor"));
const queries_1 = require("./lib/queries");
const start_email_analytics_job_event_1 = require("./events/start-email-analytics-job-event");
const start_automation_email_analytics_job_event_1 = require("./events/start-automation-email-analytics-job-event");
const constants_1 = require("../member-welcome-emails/constants");
const automation_email_analytics_batch_processor_1 = require("./automation-email-analytics-batch-processor");
const gift_email_analytics_batch_processor_1 = require("./gift-email-analytics-batch-processor");
const start_gift_email_analytics_job_event_1 = require("./events/start-gift-email-analytics-job-event");
const constants_2 = require("../gifts/constants");
exports.newsletters = new email_analytics_service_wrapper_1.EmailAnalyticsServiceWrapper({
    logName: 'newsletters',
});
exports.automations = new email_analytics_service_wrapper_1.EmailAnalyticsServiceWrapper({
    logName: 'automations',
});
exports.gifts = new email_analytics_service_wrapper_1.EmailAnalyticsServiceWrapper({
    logName: 'gifts',
});
const init = ({ automationsApi, config, db, domainEvents, emailSuppressionList, giftDeliveryService, membersRepository, models: { Email, EmailRecipientFailure, EmailSpamComplaintEvent }, metrics, prometheusClient, settingsCache, }) => {
    const queries = new queries_1.Queries(db.knex);
    const newsletterEmailEventProcessor = new email_event_processor_1.default({
        domainEvents,
        db,
        eventStorage: new newsletter_email_event_storage_1.default({
            config,
            db,
            membersRepository,
            models: {
                Email,
                EmailRecipientFailure,
                EmailSpamComplaintEvent,
            },
            emailSuppressionList,
            prometheusClient,
        }),
        prometheusClient,
    });
    const newsletterMailgunTags = ['bulk-email'];
    if (config.get('bulkEmail:mailgun:tag')) {
        newsletterMailgunTags.push(config.get('bulkEmail:mailgun:tag'));
    }
    prometheusClient?.registerCounter({
        name: newsletter_email_analytics_batch_processor_1.AGGREGATE_MEMBER_STATS_METRIC_NAME,
        help: 'Count of member stats aggregations',
    });
    exports.newsletters.init({
        config,
        domainEvents,
        event: start_email_analytics_job_event_1.StartEmailAnalyticsJobEvent,
        queries,
        mailgunTags: newsletterMailgunTags,
        jobNames: {
            latestNonOpened: 'email-analytics-latest-others',
            missing: 'email-analytics-missing',
            latestOpened: 'email-analytics-latest-opened',
            scheduled: 'email-analytics-scheduled',
        },
        cursorSeed: {
            tableName: 'email_recipients',
            eventColumns: {
                delivered: 'delivered_at',
                opened: 'opened_at',
                failed: 'failed_at',
            },
        },
        metrics,
        settingsCache,
        createEventProcessor: () => new newsletter_email_analytics_batch_processor_2.NewsletterEmailAnalyticsBatchProcessor({
            config,
            emailEventProcessor: newsletterEmailEventProcessor,
            prometheusClient,
            queries,
        }),
    });
    exports.automations.init({
        config,
        domainEvents,
        event: start_automation_email_analytics_job_event_1.StartAutomationEmailAnalyticsJobEvent,
        queries,
        mailgunTags: [constants_1.AUTOMATION_EMAIL_TAG],
        jobNames: {
            latestNonOpened: 'email-analytics-automation-latest-others',
            missing: 'email-analytics-automation-missing',
            latestOpened: 'email-analytics-automation-latest-opened',
            scheduled: 'email-analytics-automation-scheduled',
        },
        cursorSeed: {
            tableName: 'automated_email_recipients',
            eventColumns: {
                delivered: 'delivered_at',
                opened: 'opened_at',
            },
        },
        metrics,
        settingsCache,
        createEventProcessor: () => new automation_email_analytics_batch_processor_1.AutomationEmailAnalyticsBatchProcessor({
            automationsApi,
        }),
    });
    exports.gifts.init({
        config,
        domainEvents,
        event: start_gift_email_analytics_job_event_1.StartGiftEmailAnalyticsJobEvent,
        queries,
        mailgunTags: [constants_2.GIFT_DELIVERY_EMAIL_TAG],
        jobNames: {
            latestNonOpened: 'email-analytics-gifts-latest-others',
            missing: 'email-analytics-gifts-missing',
            latestOpened: 'email-analytics-gifts-latest-opened',
            scheduled: 'email-analytics-gifts-scheduled',
        },
        cursorSeed: {
            tableName: 'gift_deliveries',
            eventColumns: {
                delivered: 'outcome_at',
                failed: 'outcome_at',
            },
        },
        metrics,
        settingsCache,
        createEventProcessor: () => new gift_email_analytics_batch_processor_1.GiftEmailAnalyticsBatchProcessor({ giftDeliveryService }),
    });
};
exports.init = init;
