"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const cron_validate_1 = __importDefault(require("cron-validate"));
class JobsService {
    #backend;
    #logging;
    #sentry;
    #registry = new Map();
    constructor({ backend, logging, sentry }) {
        this.#backend = backend;
        this.#logging = logging;
        this.#sentry = sentry;
    }
    handle(JobClass, handler) {
        const type = JobClass.type;
        if (typeof type !== 'string' || type.length === 0) {
            throw new errors_1.default.IncorrectUsageError({
                message: `Cannot register a job handler: ${JobClass.name ?? 'job class'} is missing a static "type" string.`,
            });
        }
        if (this.#registry.has(type)) {
            throw new errors_1.default.IncorrectUsageError({
                message: `A handler for job type "${type}" is already registered.`,
            });
        }
        this.#registry.set(type, (payload) => handler(new JobClass(JSON.parse(payload))));
    }
    async dispatch(job) {
        await this.#backend.enqueue(this.#buildEnvelope(job));
    }
    async scheduleRecurring(job, schedule) {
        this.#assertValidCron(schedule.cron);
        await this.#backend.scheduleRecurring(this.#buildEnvelope(job), schedule);
    }
    // later.parse.cron does not strictly validate: it silently coerces a
    // malformed expression into a bogus schedule (garbage -> every minute,
    // out-of-range -> clamped, an impossible date -> effectively never), so
    // validate up front and fail loudly instead.
    #assertValidCron(cron) {
        const result = (0, cron_validate_1.default)(cron, {
            preset: 'default', // the seconds field is not supported in the default preset
            override: { useSeconds: true },
        });
        if (!result.isValid()) {
            throw new errors_1.default.IncorrectUsageError({
                message: `Invalid cron expression: ${JSON.stringify(cron)}.`,
            });
        }
    }
    async start() {
        await this.#backend.start({
            processor: (envelope) => this.#process(envelope),
        });
    }
    async shutdown(options) {
        await this.#backend.shutdown(options);
    }
    #buildEnvelope(job) {
        return { type: this.#typeOf(job), payload: JSON.stringify(job) };
    }
    #typeOf(job) {
        const ctor = job.constructor;
        const type = ctor.type;
        if (typeof type !== 'string' || type.length === 0) {
            throw new errors_1.default.IncorrectUsageError({
                message: `Cannot dispatch job: ${ctor.name ?? 'job'} is missing a static "type" string.`,
            });
        }
        return type;
    }
    async #process(envelope) {
        const deliver = this.#registry.get(envelope.type);
        if (!deliver) {
            this.#logging.error(`No handler registered for job type "${envelope.type}"; dropping delivery.`);
            return;
        }
        const startedAt = Date.now();
        this.#logging.info(`[Background Job] ${envelope.type} started`);
        try {
            await deliver(envelope.payload);
        }
        catch (err) {
            this.#logging.error(err, `[Background Job] ${envelope.type} failed after ${Date.now() - startedAt}ms`);
            this.#sentry?.captureException(err, { tags: { job_type: envelope.type } });
            throw err;
        }
        const durationMs = Date.now() - startedAt;
        this.#logging.info({
            system: {
                event: 'job.completed',
                job_type: envelope.type,
                duration_ms: durationMs,
            },
        }, `[Background Job] ${envelope.type} completed in ${durationMs}ms`);
    }
}
exports.JobsService = JobsService;
