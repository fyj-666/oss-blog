"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const members_custom_fields_1 = require("../../services/members-custom-fields");
const permissionsService = require('../../services/permissions');
// With `permissions: true` the framework checks against the Bookshelf model named after
// the resource. These fields have no Bookshelf model, so each handler asks the permissions
// service directly.
function canThis(frame) {
    return permissionsService.canThis(frame.options.context);
}
const noCacheInvalidation = { cacheInvalidate: false };
const controller = {
    docName: 'members_metafields',
    browse: {
        headers: noCacheInvalidation,
        options: ['namespace', 'filter'],
        validation: { options: { namespace: { required: true } } },
        permissions(frame) {
            return canThis(frame).browse.member_custom_field();
        },
        query(frame) {
            return members_custom_fields_1.definitions.browse({
                namespace: frame.options.namespace,
                filter: frame.options.filter,
            });
        },
    },
    read: {
        headers: noCacheInvalidation,
        options: ['namespace', 'key'],
        validation: { options: { namespace: { required: true }, key: { required: true } } },
        permissions(frame) {
            return canThis(frame).read.member_custom_field(frame.options.key);
        },
        query(frame) {
            return members_custom_fields_1.definitions.read(frame.options.namespace, frame.options.key);
        },
    },
    add: {
        statusCode: 201,
        headers: noCacheInvalidation,
        options: ['namespace'],
        validation: { options: { namespace: { required: true } } },
        permissions(frame) {
            return canThis(frame).add.member_custom_field();
        },
        query(frame) {
            return members_custom_fields_1.definitions.add((0, members_custom_fields_1.actingContext)(frame.options.context), frame.options.namespace, frame.data.members_metafields);
        },
    },
    reorder: {
        headers: noCacheInvalidation,
        options: ['namespace'],
        validation: { options: { namespace: { required: true } } },
        permissions(frame) {
            return canThis(frame).edit.member_custom_field();
        },
        query(frame) {
            return members_custom_fields_1.definitions.reorder((0, members_custom_fields_1.actingContext)(frame.options.context), frame.options.namespace, frame.data.members_metafields);
        },
    },
    edit: {
        headers: noCacheInvalidation,
        options: ['namespace', 'key'],
        validation: { options: { namespace: { required: true }, key: { required: true } } },
        permissions(frame) {
            return canThis(frame).edit.member_custom_field(frame.options.key);
        },
        query(frame) {
            return members_custom_fields_1.definitions.edit((0, members_custom_fields_1.actingContext)(frame.options.context), frame.options.namespace, frame.options.key, frame.data.members_metafields[0]);
        },
    },
    destroy: {
        statusCode: 204,
        headers: noCacheInvalidation,
        options: ['namespace', 'key'],
        validation: { options: { namespace: { required: true }, key: { required: true } } },
        permissions(frame) {
            return canThis(frame).destroy.member_custom_field(frame.options.key);
        },
        async query(frame) {
            await members_custom_fields_1.definitions.destroy((0, members_custom_fields_1.actingContext)(frame.options.context), frame.options.namespace, frame.options.key);
            return null;
        },
    },
};
// The API framework loads this file with `require()`, so it exports CommonJS-style;
// `export default` would not be picked up.
module.exports = controller;
