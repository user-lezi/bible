"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compress_1 = require("../functions/compress");
const fs_1 = require("fs");
const path_1 = require("path");
let toCompress = (0, fs_1.readdirSync)((0, path_1.join)(__dirname, "..", "..", "bible"));
for (let file of toCompress) {
    let from = (0, path_1.join)(__dirname, "..", "..", "bible", file);
    let to = (0, path_1.join)(__dirname, "..", "..", "compressedBible", file);
    console.log(`Compressing "${from}" to "${to}"`);
    let rawBible = (0, fs_1.readFileSync)(from, "utf8");
    let compressed = (0, compress_1.compress)(rawBible);
    (0, fs_1.writeFileSync)(to, compressed);
    console.log(`Raw: ${getFileSize(from)}kb`);
    console.log(`Compressed: ${getFileSize(to)}kb`);
}
function getFileSize(path) {
    return Number(((0, fs_1.statSync)(path).size / 1024).toFixed(2));
}
//# sourceMappingURL=compress.js.map