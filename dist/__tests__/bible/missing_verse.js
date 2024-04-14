"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const getBible_1 = __importDefault(require("../../functions/getBible"));
const fs_1 = require("fs");
const path_1 = require("path");
let bible = (0, getBible_1.default)(index_1.Translation.BasicEnglish);
let lines = bible.split('\n');
let missingLines = [];
let data = {};
for (let line of lines) {
    let index = lines.indexOf(line);
    if (!line.includes('undefined'))
        continue;
    let newLine = `${line.split(' ')[0]} ${line.split(' ')[1]}`;
    if (!data[newLine]) {
        missingLines.push(line);
        continue;
    }
    newLine += ` ${data[newLine]}`;
    lines[index] = newLine;
}
(0, fs_1.writeFileSync)((0, path_1.join)('bible', index_1.Translation.BasicEnglish + '.txt'), lines.join('\n'));
console.log(missingLines.join('\n'));
//# sourceMappingURL=missing_verse.js.map