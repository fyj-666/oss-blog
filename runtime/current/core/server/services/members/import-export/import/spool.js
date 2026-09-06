"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRowSpool = createRowSpool;
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const fs_extra_1 = __importDefault(require("fs-extra"));
// Spools import rows to a private JSON file under the OS temp dir, so a deferred
// import can hand them to a background job and read them back after the request has
// already returned. The rows go in and come out as MemberImportRow, so nothing but
// the import's own row shape crosses this boundary.
function createRowSpool() {
    return {
        async write(rows) {
            const spoolPath = node_path_1.default.join(node_os_1.default.tmpdir(), `members-import-${node_crypto_1.default.randomUUID()}.json`);
            await fs_extra_1.default.writeFile(spoolPath, JSON.stringify(rows), { mode: 0o600 });
            return {
                async read() {
                    return JSON.parse(await fs_extra_1.default.readFile(spoolPath, 'utf8'));
                },
                async remove() {
                    await fs_extra_1.default.remove(spoolPath);
                },
            };
        },
    };
}
