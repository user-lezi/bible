"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
};
function default_1(text) {
    let result = "";
    for (let char of text) {
        result += data[char];
    }
    return result;
}
exports.default = default_1;
//# sourceMappingURL=subscript.js.map