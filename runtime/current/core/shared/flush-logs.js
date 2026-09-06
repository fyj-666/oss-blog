"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushLogs = flushLogs;
const promises_1 = require("node:timers/promises");
const logging_1 = __importDefault(require("@tryghost/logging"));
const DEFAULT_TIMEOUT_MS = 2000;
/**
 * Drain buffered log transports before the process exits, bounded so a stuck
 * transport can never block shutdown.
 */
async function flushLogs(timeoutMs = DEFAULT_TIMEOUT_MS) {
    // Unreffed so the loser of the race can't hold the event loop open
    await Promise.race([logging_1.default.flush(), (0, promises_1.setTimeout)(timeoutMs, undefined, { ref: false })]);
}
