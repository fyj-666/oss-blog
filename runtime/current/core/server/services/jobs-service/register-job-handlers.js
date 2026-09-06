"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerJobHandlers;
const clean_tokens_job_1 = __importDefault(require("../members/jobs/clean-tokens-job"));
const clean_expired_comped_job_1 = __importDefault(require("../members/jobs/clean-expired-comped-job"));
const clean_gifts_job_1 = __importDefault(require("../gifts/jobs/clean-gifts-job"));
const external_media_inliner_job_1 = __importDefault(require("../media-inliner/external-media-inliner-job"));
const content_csv_import_job_1 = __importDefault(require("../content-import/jobs/content-csv-import-job"));
const contentImport = __importStar(require("../content-import"));
const update_check_job_1 = __importDefault(require("../update-check/jobs/update-check-job"));
const process_webmention_job_1 = __importDefault(require("../mentions/process-webmention-job"));
const updateCheck = require('../update-check');
function registerJobHandlers({ jobsService, memberJobs, giftService, mediaInliner, mentionsController, }) {
    jobsService.handle(clean_tokens_job_1.default, async () => {
        await memberJobs.cleanTokens();
    });
    jobsService.handle(clean_expired_comped_job_1.default, async () => {
        await memberJobs.cleanExpiredComped();
    });
    jobsService.handle(clean_gifts_job_1.default, async () => {
        await giftService.cleanup();
    });
    jobsService.handle(external_media_inliner_job_1.default, async (job) => {
        await mediaInliner.inline(job.domains);
    });
    jobsService.handle(content_csv_import_job_1.default, async (job) => {
        await contentImport.handleJob(job);
    });
    jobsService.handle(update_check_job_1.default, async () => {
        await updateCheck({ rethrowErrors: true });
    });
    jobsService.handle(process_webmention_job_1.default, async (job) => {
        await mentionsController.processWebmention(job);
    });
}
