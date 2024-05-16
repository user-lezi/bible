"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let verse = "Psalm 91:6";
let start = Date.now();
console.log((0, index_1.getReading)(verse));
console.log(`Took ${Date.now() - start}ms`);
//# sourceMappingURL=reading.js.map