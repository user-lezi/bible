"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReading = exports.getBible = void 0;
const getBible_1 = __importDefault(require("./functions/getBible"));
exports.getBible = getBible_1.default;
const typings_1 = require("./typings");
const Bible_1 = require("./structures/Bible");
__exportStar(require("./typings"), exports);
__exportStar(require("./structures"), exports);
let translations = Object.values(typings_1.Translation);
function getReading(verse) {
    let output = [];
    for (let translation of translations) {
        let bible = new Bible_1.Bible(translation);
        let reading = bible.getReading(verse);
        if (reading) {
            output.push({
                ...reading,
                translation,
                bible,
            });
        }
    }
    return output;
}
exports.getReading = getReading;
//# sourceMappingURL=index.js.map