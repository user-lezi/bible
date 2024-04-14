"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typings_1 = require("../typings");
const Chapter_1 = require("./Chapter");
class Book {
    name;
    abbr;
    chapters = [];
    constructor(name, chaptersRaw) {
        if (!Book.isValidBookName(name)) {
            throw new Error(`Invalid book name: ${name}\n` +
                `Available: [${typings_1.Books.join(", ")}]`);
        }
        this.name = name;
        name = /\d /.test(name) ? name.split(' ').reverse().join('_') : name.replaceAll(' ', '_');
        this.abbr = Object.entries(typings_1.DefinedBookAlias).find(x => x[0] === name)?.[1] || name;
        let c = {};
        for (let chapterRaw of chaptersRaw) {
            let chp = chapterRaw.split(' ')[1].split(':')[0];
            if (!c[chp])
                c[chp] = [];
            c[chp].push(chapterRaw);
        }
        for (let chp in c) {
            this.chapters.push(new Chapter_1.Chapter(parseInt(chp), c[chp]));
        }
        ;
    }
    static isValidBookName(name) {
        return typings_1.Books.includes(name);
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map