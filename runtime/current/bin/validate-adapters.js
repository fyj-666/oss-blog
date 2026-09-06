#!/usr/bin/env node
"use strict";
// Checks that custom adapters load and implement everything their base class
// requires. Ghost only verifies an adapter fully on first use (`getAdapter`), so a
// missing method on a storage adapter otherwise surfaces at first upload; run this
// at image build time to fail the build instead.
//
// Usage: bin/validate-adapters.js <type>:<AdapterClassName> ...
//   e.g. bin/validate-adapters.js cache:Redis sso:ProSSO storage:S3Storage
//
// Adapters are named explicitly rather than read from config, which may not be
// present at build time
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_paths_1 = require("../core/server/services/adapter-manager/adapter-paths");
const base_classes_1 = require("../core/server/services/adapter-manager/base-classes");
const utils_1 = require("../core/server/services/adapter-manager/utils");
function validate(spec) {
    const parts = spec.split(':');
    if (parts.length !== 2 || !parts[0] || !parts[1]) {
        throw new Error(`expected <type>:<AdapterClassName>, got "${spec}"`);
    }
    const [type, className] = parts;
    const BaseClass = base_classes_1.baseClasses[type];
    if (!BaseClass) {
        throw new Error(`unknown adapter type "${type}" - expected one of: ${Object.keys(base_classes_1.baseClasses).join(', ')}`);
    }
    // Same loader the adapter manager uses, so resolution and its failure messages
    // are identical to what the running server would report.
    const Adapter = (0, utils_1.loadAdapterClass)(type, className, adapter_paths_1.adapterPaths, require);
    // Matches the adapter manager's check, including its tolerance for a base class
    // loaded from a second copy of the package, where instanceof fails.
    const inherits = Adapter.prototype instanceof BaseClass ||
        Object.getPrototypeOf(Adapter).name === BaseClass.name;
    if (!inherits) {
        throw new Error(`does not inherit from ${BaseClass.name}`);
    }
    // requiredFns is defined by the base constructor and can't be overridden by a
    // subclass, so the base instance is the authority on what must be implemented.
    // The bases are abstract, which constrains the type checker but not the runtime.
    const Base = BaseClass;
    const missing = new Base().requiredFns.filter((fn) => typeof Adapter.prototype[fn] !== 'function');
    if (missing.length) {
        throw new Error(`missing method(s): ${missing.join(', ')}`);
    }
}
function main(specs) {
    if (!specs.length) {
        process.stderr.write('Usage: bin/validate-adapters.js <type>:<AdapterClassName> ...\n');
        process.exit(1);
    }
    const failures = [];
    for (const spec of specs) {
        try {
            validate(spec);
            process.stdout.write(`  ok    ${spec}\n`);
        }
        catch (err) {
            failures.push({ spec, message: err.message });
            process.stdout.write(`  FAIL  ${spec}\n`);
        }
    }
    if (failures.length) {
        process.stderr.write(`\n${failures.length} of ${specs.length} adapter(s) failed validation:\n`);
        for (const { spec, message } of failures) {
            process.stderr.write(`- ${spec}: ${message}\n`);
        }
        process.exit(1);
    }
    process.stdout.write(`Validated ${specs.length} adapter(s).\n`);
}
main(process.argv.slice(2));
