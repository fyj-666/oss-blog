"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseClasses = void 0;
const ghost_storage_base_1 = require("ghost-storage-base");
const adapter_base_scheduling_1 = require("@tryghost/adapter-base-scheduling");
const adapter_base_sso_1 = require("@tryghost/adapter-base-sso");
const adapter_base_cache_1 = require("@tryghost/adapter-base-cache");
const adapter_base_redirects_1 = require("@tryghost/adapter-base-redirects");
const adapter_base_route_settings_1 = require("@tryghost/adapter-base-route-settings");
const adapter_base_jobs_1 = require("@tryghost/adapter-base-jobs");
/**
 * The base class every adapter of a given type must extend. Also read by
 * bin/validate-adapters.js, which checks adapter implementations at build time -
 * keep this the only place the mapping is declared.
 */
exports.baseClasses = {
    storage: ghost_storage_base_1.StorageBase,
    scheduling: adapter_base_scheduling_1.SchedulingBase,
    sso: adapter_base_sso_1.SSOBase,
    cache: adapter_base_cache_1.CacheBase,
    redirects: adapter_base_redirects_1.RedirectsStoreBase,
    'route-settings': adapter_base_route_settings_1.RouteSettingsStoreBase,
    jobs: adapter_base_jobs_1.JobsBackendBase,
};
