"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbBoundField = exports.DbCustomFieldBinding = exports.DbCustomFieldLeaf = exports.DbCustomFieldValue = exports.WrittenBy = exports.DbCustomField = exports.FieldStatusSchema = exports.FIELD_STATUS = void 0;
const zod_1 = require("zod");
const custom_field_types_1 = require("@tryghost/custom-field-types");
const date_1 = require("../../lib/db-types/date");
// `archived` is soft: the field drops out of the values path but stays in the definition
// list so it can be renamed, restored or deleted. Mirrors schema.js's `isIn` on the
// column, which is static config and cannot import this.
exports.FIELD_STATUS = { active: 'active', archived: 'archived' };
exports.FieldStatusSchema = zod_1.z.enum([exports.FIELD_STATUS.active, exports.FIELD_STATUS.archived]);
// The single source for the read projection and the knex table type below. `type` parses
// as the field-type enum, so the row carries the narrow type and no codec needs a cast.
exports.DbCustomField = zod_1.z.object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
    status: exports.FieldStatusSchema,
    created_at: date_1.DbDate,
    updated_at: date_1.DbDate.nullable(),
});
/**
 * How a value arrived, not who caused it: who edited a member's fields is already an
 * action, and Stripe is not a person. `type` is the namespace that makes `id` resolvable —
 * `users`, `integrations`, `members_custom_field_bindings` — so the one writer that
 * resolves in no table is the one with no id to give.
 */
exports.WrittenBy = zod_1.z.discriminatedUnion('type', [
    zod_1.z.object({ type: zod_1.z.literal('user'), id: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('integration'), id: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('binding'), id: zod_1.z.string() }),
    zod_1.z.object({ type: zod_1.z.literal('import'), id: zod_1.z.null() }),
]);
// One part of a member's value. What a `path` means is storage.ts's business, so the row
// carries it as a plain string.
exports.DbCustomFieldValue = zod_1.z.object({
    id: zod_1.z.string(),
    custom_field_key: zod_1.z.string(),
    member_id: zod_1.z.string(),
    path: zod_1.z.string(),
    // Nullable like the column, though nothing here writes a null: a part with no value
    // has no row.
    value_text: zod_1.z.string().nullable(),
    // Plain columns rather than the `WrittenBy` union: the rule holds at the write
    // boundary, so one malformed row cannot throw away a member's whole profile on read.
    written_by_type: zod_1.z.string(),
    // Null for the one writer that resolves nowhere: an import, until runs are tracked.
    written_by_id: zod_1.z.string().nullable(),
    created_at: date_1.DbDate,
    updated_at: date_1.DbDate.nullable(),
});
// The field's key travels with the row so a value assembles without a second lookup.
//
// `type` takes no part in the assembly and is here as a gate: a value whose type has left
// the catalog is one the definitions list no longer returns either, so failing to parse
// is what drops it.
exports.DbCustomFieldLeaf = zod_1.z.object({
    member_id: zod_1.z.string(),
    key: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
    path: zod_1.z.string(),
    value_text: zod_1.z.string(),
});
exports.DbCustomFieldBinding = zod_1.z.object({
    id: zod_1.z.string(),
    product_id: zod_1.z.string(),
    port: zod_1.z.string(),
    custom_field_key: zod_1.z.string(),
    created_at: date_1.DbDate,
    updated_at: date_1.DbDate.nullable(),
});
/** A binding joined to the field it points at, which is how a collected value is routed. */
exports.DbBoundField = zod_1.z.object({
    binding_id: zod_1.z.string(),
    key: zod_1.z.string(),
    type: custom_field_types_1.FieldTypeSchema,
});
