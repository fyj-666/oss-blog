"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchedulerIdempotencyKey = getSchedulerIdempotencyKey;
const node_crypto_1 = __importDefault(require("node:crypto"));
function getSchedulerIdempotencyKey(date, url) {
    const hash = node_crypto_1.default.createHash('sha256');
    hash.update(date.toISOString());
    hash.update(url.href);
    return `ghost-automations-${hash.digest('hex')}`;
}
