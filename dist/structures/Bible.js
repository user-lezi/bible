"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicEnglishBible = exports.Bible = void 0;
const typings_1 = require("../typings");
const getBible_1 = __importDefault(require("../functions/getBible"));
const Book_1 = require("./Book");
const BibleFullNames = {
    [typings_1.Translation.BasicEnglish]: 'Bible in Basic English (BBE)'
};
class Bible {
    translation;
    name;
    books = [];
    constructor(translation) {
        if (!this.isValidTranslation(translation)) {
            throw new Error(`Invalid translation\n` +
                `Available: [${Object.keys(typings_1.Translation).join(", ")}]`);
        }
        this.translation = translation;
        this.name = BibleFullNames[translation];
        this.init();
    }
    init() {
        let bible = (0, getBible_1.default)(this.translation);
        let lines = bible.split('\n');
        lines.shift();
        lines.pop();
        let books = {};
        for (let line of lines) {
            let book = line.split(' ')[0];
            if (!books[book])
                books[book] = [];
            books[book].push(line);
        }
        for (let book in books) {
            let bookName = Object.entries(typings_1.DefinedBookAlias).find(x => x[1] === book)?.[0] || book;
            bookName = /_\d/.test(bookName) ? bookName.split('_').reverse().join(' ') : bookName.replaceAll('_', ' ');
            this.books.push(new Book_1.Book(bookName, books[book]));
        }
    }
    getBook(name) {
        if (!Book_1.Book.isValidBookName(name)) {
            throw new Error(`Invalid book name\n` +
                `Available: [${typings_1.Books.join(", ")}]`);
        }
        return this.books.find(x => x.name === name) || this.books[0];
    }
    isValidTranslation(translation) {
        return Object.values(typings_1.Translation).includes(translation);
    }
}
exports.Bible = Bible;
class BasicEnglishBible extends Bible {
    constructor() {
        super(typings_1.Translation.BasicEnglish);
    }
}
exports.BasicEnglishBible = BasicEnglishBible;
//# sourceMappingURL=Bible.js.map