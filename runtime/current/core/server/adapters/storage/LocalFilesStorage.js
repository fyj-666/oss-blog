"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// # Local File System Storage module
// The (default) module for storing media, using the local file system
const config_1 = __importDefault(require("../../../shared/config"));
const url_utils_1 = __importDefault(require("../../../shared/url-utils"));
const LocalStorageBase_1 = __importDefault(require("./LocalStorageBase"));
const messages = {
    notFound: 'File not found',
    notFoundWithRef: 'File not found: {file}',
    cannotRead: 'Could not read File: {file}',
};
class LocalFilesStorage extends LocalStorageBase_1.default {
    constructor() {
        super({
            storagePath: config_1.default.getContentPath('files'),
            siteUrl: config_1.default.getSiteUrl(),
            staticFileURLPrefix: url_utils_1.default.STATIC_FILES_URL_PREFIX,
            errorMessages: messages,
        });
    }
}
exports.default = LocalFilesStorage;
