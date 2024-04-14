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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("../functions/prompt"));
const fs_1 = require("fs");
const path_1 = require("path");
async function main() {
    let testNamesStr = (await (0, prompt_1.default)("Enter test names (separated by commas):")) || "";
    let testNames = testNamesStr.split(",").map((name) => name.trim());
    let testFiles = [];
    for (let name of testNames) {
        if (!name)
            continue;
        name = name.replace(/ /g, "/");
        name = `./${name}.js`;
        let path = (0, path_1.join)(__dirname, name);
        if (!(0, fs_1.existsSync)(path) || (0, fs_1.statSync)(path).isDirectory())
            continue;
        testFiles.push(name);
    }
    if (testFiles.length === 0) {
        console.log("No tests found");
        return;
    }
    console.log(`Running ${testFiles.length} tests`);
    for (let file of testFiles) {
        console.log(`> "${(0, path_1.join)("dist", "__tests__", file)}"`);
        Promise.resolve(`${file}`).then(s => __importStar(require(s)));
    }
    return;
}
main();
//# sourceMappingURL=runner.js.map