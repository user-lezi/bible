"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const compress_1 = require("../functions/compress");
function getBible(translation) {
    let path = (0, path_1.join)(__dirname, "..", "..", "compressedBible", translation + ".txt");
    return (0, compress_1.decompress)((0, fs_1.readFileSync)(path, "utf8"));
}
exports.default = getBible;
//# sourceMappingURL=getBible.js.map