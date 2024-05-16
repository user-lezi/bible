"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let start = Date.now();
let bible = new index_1.BasicEnglishBible();
console.log(bible.getReading("Ps 2:1ff"));
console.log(Date.now() - start);
//# sourceMappingURL=bbe.js.map