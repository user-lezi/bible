"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typings_1 = require("../typings");
const Chapter_1 = require("./Chapter");
class Book {
    bible;
    name;
    abbr;
    allAbbr;
    preferredAbbr;
    chapters = [];
    chaptersCount;
    constructor(name, chaptersRaw, bible) {
        this.bible = bible;
        if (!Book.isValidBookName(name)) {
            throw new Error(`Invalid book name: ${name}\n` + `Available: [${typings_1.Books.join(", ")}]`);
        }
        this.name = name;
        name = Book.uncleanName(name);
        this.abbr = Object.entries(typings_1.DefinedBookAlias).find((x) => x[0] === name)?.[1] || name;
        this.allAbbr = typings_1.BookAbbr[name];
        this.preferredAbbr = typings_1.PreferredAbbr[name];
        let c = {};
        for (let chapterRaw of chaptersRaw) {
            let chp = chapterRaw.split(" ")[1].split(":")[0];
            if (!c[chp])
                c[chp] = [];
            c[chp].push(chapterRaw);
        }
        for (let chp in c) {
            this.chapters.push(new Chapter_1.Chapter(parseInt(chp), c[chp], this));
        }
        this.chaptersCount = this.chapters.length;
    }
    getChapter(chapterNo) {
        if (typeof chapterNo !== "number" || chapterNo < 1 || chapterNo > this.chaptersCount) {
            throw new RangeError(`Invalid chapter number: ${chapterNo}\n` + `Available: [1, ${this.chaptersCount}]`);
        }
        return this.chapters[chapterNo - 1];
    }
    static isValidBookName(name) {
        return Book.parseBookName(name) !== "";
    }
    static parseBookName(name) {
        let bookName = "";
        for (let book in typings_1.BookAbbr) {
            let abbrs = typings_1.BookAbbr[book];
            for (let abbr of abbrs) {
                if (name.toLowerCase() == abbr.toLowerCase()) {
                    bookName = abbrs[abbrs.length - 1];
                    break;
                }
            }
        }
        return bookName;
    }
    static cleanName(name) {
        return /_\d/.test(name) ? name.split("_").reverse().join(" ") : name.replaceAll(" ", "_");
    }
    static uncleanName(name) {
        return /_\d/.test(name) ? name.split(" ").reverse().join("_") : name.replaceAll(" ", "_");
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map