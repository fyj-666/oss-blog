"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdminApiBulkFilterTransformer = exports.rejectAdminApiRestrictedFieldsTransformer = exports.rejectContentApiRestrictedFieldsTransformer = void 0;
const errors_1 = __importDefault(require("@tryghost/errors"));
const mongo_utils_1 = require("@tryghost/mongo-utils");
const CONTENT_API_RESTRICTED_FIELDS = new Set(['password', 'email']);
const ADMIN_API_RESTRICTED_FIELDS = new Set(['password']);
function hasRestrictedSegment(key, fields) {
    return key
        .toLowerCase()
        .split('.')
        .some((segment) => fields.has(segment));
}
const rejectContentApiRestrictedFieldsTransformer = (input) => {
    return (0, mongo_utils_1.rejectStatements)(input, (key) => hasRestrictedSegment(key, CONTENT_API_RESTRICTED_FIELDS));
};
exports.rejectContentApiRestrictedFieldsTransformer = rejectContentApiRestrictedFieldsTransformer;
const rejectAdminApiRestrictedFieldsTransformer = (input) => {
    return (0, mongo_utils_1.rejectStatements)(input, (key) => hasRestrictedSegment(key, ADMIN_API_RESTRICTED_FIELDS));
};
exports.rejectAdminApiRestrictedFieldsTransformer = rejectAdminApiRestrictedFieldsTransformer;
const validateAdminApiBulkFilterTransformer = (input) => {
    const restrictedField = (0, mongo_utils_1.getUsedKeys)(input).find((key) => hasRestrictedSegment(key, ADMIN_API_RESTRICTED_FIELDS));
    if (restrictedField) {
        throw new errors_1.default.BadRequestError({
            message: 'Restricted fields cannot be used in bulk operation filters.',
        });
    }
    return input;
};
exports.validateAdminApiBulkFilterTransformer = validateAdminApiBulkFilterTransformer;
