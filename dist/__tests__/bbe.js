"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let start = Date.now();
let bible = new index_1.KingJamesVersionBible();
console.log(bible.getReading("Ps 2:1"));
console.log(Date.now() - start);
//# sourceMappingURL=bbe.js.map