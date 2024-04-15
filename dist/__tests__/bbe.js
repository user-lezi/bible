"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let start = Date.now();
let bible = new index_1.BasicEnglishBible();
console.log(bible.getReading("John 14:6"));
console.log(Date.now() - start);
//# sourceMappingURL=bbe.js.map