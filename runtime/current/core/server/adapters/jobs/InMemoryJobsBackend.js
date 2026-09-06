"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("@tryghost/errors"));
const fastq_1 = __importDefault(require("fastq"));
const adapter_base_jobs_1 = require("@tryghost/adapter-base-jobs");
const later = require('@breejs/later');
const logging = require('@tryghost/logging');
const DEFAULT_SHUTDOWN_TIMEOUT_MS = 10000;
const DEFAULT_CONCURRENCY = 3;
function hasSeconds(cron) {
    return cron.trim().split(/\s+/).length >= 6;
}
function resolveConcurrency(value) {
    if (value === undefined || value === null) {
        return DEFAULT_CONCURRENCY;
    }
    if (typeof value !== 'number' || !Number.isInteger(value) || value < 1) {
        throw new errors_1.default.IncorrectUsageError({
            message: `Invalid jobs backend concurrency: ${JSON.stringify(value)}. Expected a positive integer.`,
        });
    }
    return value;
}
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
class InMemoryJobsBackend extends adapter_base_jobs_1.JobsBackendBase {
    _processor;
    _stopped;
    _concurrency;
    _queue;
    _recurring;
    constructor(config = {}) {
        super();
        this._processor = null;
        this._stopped = false;
        this._concurrency = resolveConcurrency(config.concurrency);
        this._queue = this._createQueue();
        this._recurring = new Map();
    }
    _createQueue() {
        const queue = fastq_1.default.promise((envelope) => this._deliver(envelope), this._concurrency);
        // Paused until start() attaches a processor; enqueue buffers meanwhile.
        queue.pause();
        return queue;
    }
    start({ processor }) {
        this._processor = processor;
        this._stopped = false;
        this._queue.resume();
    }
    enqueue(envelope) {
        if (this._stopped) {
            return;
        }
        this._queue.push(envelope);
    }
    async _deliver(envelope) {
        const processor = this._processor;
        if (!processor) {
            throw new errors_1.default.IncorrectUsageError({
                message: 'InMemoryJobsBackend attempted a delivery with no processor attached - the backend lifecycle is broken.',
            });
        }
        try {
            await processor(envelope);
        }
        catch (err) {
            logging.error(`Job "${envelope.type}" delivery failed`, err);
        }
    }
    scheduleRecurring(envelope, { cron }) {
        // First schedule per type wins; a re-registration must not disturb a
        // schedule that is already running (parity with a durable backend).
        if (this._stopped || this._recurring.has(envelope.type)) {
            return;
        }
        const parsed = later.parse.cron(cron, hasSeconds(cron));
        const timer = later.setInterval(() => {
            this.enqueue(envelope);
        }, parsed);
        this._recurring.set(envelope.type, timer);
    }
    _clearRecurring(type) {
        const timer = this._recurring.get(type);
        if (timer) {
            timer.clear();
            this._recurring.delete(type);
        }
    }
    async shutdown(options = {}) {
        const timeoutMs = options.timeoutMs ?? DEFAULT_SHUTDOWN_TIMEOUT_MS;
        this._stopped = true;
        for (const type of [...this._recurring.keys()]) {
            this._clearRecurring(type);
        }
        const queue = this._queue;
        queue.kill();
        if (!queue.idle()) {
            await Promise.race([queue.drained(), delay(timeoutMs)]);
        }
        // Fresh (paused) queue so a re-boot never inherits this lifecycle's
        // abandoned in-flight deliveries against its concurrency limit.
        this._queue = this._createQueue();
        this._processor = null;
    }
}
exports.default = InMemoryJobsBackend;
