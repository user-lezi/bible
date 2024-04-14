"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const getBible_1 = __importDefault(require("../../functions/getBible"));
let bible = (0, getBible_1.default)(index_1.Translation.BasicEnglish);
console.log(bible.length);
//# sourceMappingURL=length.js.map