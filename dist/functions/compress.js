"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompress = exports.compress = void 0;
function compress(text) {
    let dic = {};
    let index = 256;
    for (let i = 0; i < index; i++) {
        dic[String.fromCharCode(i)] = i;
    }
    let result = [];
    let current = text[0];
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let next = current + char;
        if (dic[next]) {
            current = next;
        }
        else {
            result.push(dic[current]);
            dic[next] = index;
            index++;
            current = char;
        }
    }
    result.push(dic[current]);
    return result.map((x) => x.toString(36)).join(" ");
}
exports.compress = compress;
function decompress(text) {
    let dic = {};
    let index = 256;
    for (let i = 0; i < index; i++) {
        dic[i] = String.fromCharCode(i);
    }
    let compressed = text.split(" ").map((n) => parseInt(n, 36));
    let result = "";
    let w = dic[compressed[0]];
    let entry = "";
    for (let i = 1; i < compressed.length; i++) {
        let k = compressed[i];
        if (dic[k]) {
            entry = dic[k];
        }
        else {
            if (k === index) {
                entry = w + w.charAt(0);
            }
            else {
                return "";
            }
        }
        result += entry;
        dic[index] = w + entry.charAt(0);
        index++;
        w = entry;
    }
    return result;
}
exports.decompress = decompress;
//# sourceMappingURL=compress.js.map