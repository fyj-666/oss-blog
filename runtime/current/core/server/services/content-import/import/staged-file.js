"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImportFileStager = createImportFileStager;
const node_crypto_1 = __importDefault(require("node:crypto"));
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
function createImportFileStager() {
    return {
        async stage({ filePath, fileName }) {
            const stagedPath = node_path_1.default.join(node_os_1.default.tmpdir(), `content-csv-import-${node_crypto_1.default.randomUUID()}`);
            try {
                await fs_extra_1.default.copyFile(filePath, stagedPath, fs_extra_1.default.constants.COPYFILE_EXCL);
                await fs_extra_1.default.chmod(stagedPath, 0o600);
            }
            catch (error) {
                await fs_extra_1.default.remove(stagedPath).catch(() => { });
                throw error;
            }
            return { path: stagedPath, name: fileName };
        },
        async remove(file) {
            await fs_extra_1.default.remove(file.path);
        },
    };
}
