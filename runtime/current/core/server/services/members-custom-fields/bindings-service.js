"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldBindingsService = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const schema_1 = require("./schema");
const FIELDS_TABLE = 'members_custom_fields';
const { CUSTOM_NAMESPACE } = require('@tryghost/custom-field-types/identity');
const BINDINGS_TABLE = 'members_custom_field_bindings';
/**
 * Where a source sends what it collected: a `port` is the name that source uses for a
 * thing, and the binding resolves it to one of the publisher's fields.
 */
class CustomFieldBindingsService {
    knex;
    values;
    constructor({ knex, values }) {
        this.knex = knex;
        this.values = values;
    }
    async bind(db, productId, port, customFieldKey, now) {
        const existing = await db(BINDINGS_TABLE).where({ product_id: productId, port }).first();
        if (existing?.custom_field_key === customFieldKey) {
            await db(BINDINGS_TABLE).where('id', existing.id).update({ updated_at: now });
            return existing.id;
        }
        if (existing) {
            await db(BINDINGS_TABLE).where('id', existing.id).del();
        }
        const bindingId = new bson_objectid_1.default().toHexString();
        await db(BINDINGS_TABLE).insert({
            id: bindingId,
            product_id: productId,
            port,
            custom_field_key: customFieldKey,
            created_at: now,
            updated_at: now,
        });
        return bindingId;
    }
    /** Stops the writing. Whatever hangs off the binding cascades with it. */
    async remove(db, productId, port) {
        await db(BINDINGS_TABLE).where({ product_id: productId, port }).del();
    }
    /**
     * Values arrive in the order they are to be applied: where two land in one field, the
     * last of them is what the field holds.
     */
    async writeCollected(memberId, productId, collected) {
        for (const { port, value } of collected) {
            const destination = await this.resolve(productId, port);
            if (!destination) {
                continue;
            }
            await this.writeOne(memberId, destination, value);
        }
    }
    async writeOne(memberId, into, value) {
        let planned;
        try {
            planned = await this.values.planWrite({ [`${CUSTOM_NAMESPACE}.${into.key}`]: value });
        }
        catch (err) {
            logging_1.default.warn({
                event: { name: 'members.custom_fields.collected_value_rejected' },
                err,
                memberId,
                customFieldKey: into.key,
            }, 'A collected value could not be saved');
            return;
        }
        try {
            await this.values.applyWrite(memberId, planned, {
                writtenBy: { type: 'binding', id: into.bindingId },
            });
        }
        catch (err) {
            logging_1.default.error({
                event: { name: 'members.custom_fields.collected_value_write_failed' },
                err,
                memberId,
                customFieldKey: into.key,
                bindingId: into.bindingId,
            }, 'Failed to store a collected custom field value');
        }
    }
    async resolve(productId, port) {
        const row = await this.knex(BINDINGS_TABLE)
            .join(FIELDS_TABLE, `${BINDINGS_TABLE}.custom_field_key`, `${FIELDS_TABLE}.key`)
            .where(`${BINDINGS_TABLE}.product_id`, productId)
            .where(`${BINDINGS_TABLE}.port`, port)
            // An archived destination is still where this goes, and still not somewhere a value
            // can land, so the write drops rather than waiting.
            .where(`${FIELDS_TABLE}.status`, schema_1.FIELD_STATUS.active)
            .select(`${BINDINGS_TABLE}.id as binding_id`, `${FIELDS_TABLE}.key`, `${FIELDS_TABLE}.type`)
            .first();
        if (!row) {
            return null;
        }
        // Decoded rather than trusted: a join is a read boundary, and `type` is what decides
        // how the collected value is read. Unreadable counts as unresolved rather than
        // throwing, so one bad row skips its value the way an unbound port does instead of
        // failing everything else the same checkout collected.
        const bound = schema_1.DbBoundField.safeParse(row);
        if (!bound.success) {
            logging_1.default.warn({
                event: { name: 'members.custom_fields.binding_unreadable' },
                err: bound.error,
                productId,
                port,
            }, 'A binding could not be read');
            return null;
        }
        return { bindingId: bound.data.binding_id, key: bound.data.key, type: bound.data.type };
    }
}
exports.CustomFieldBindingsService = CustomFieldBindingsService;
