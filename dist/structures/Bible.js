"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicEnglishBible = exports.Bible = void 0;
const typings_1 = require("../typings");
const getBible_1 = __importDefault(require("../functions/getBible"));
const subscript_1 = __importDefault(require("../functions/subscript"));
const Book_1 = require("./Book");
const Verse_1 = require("./Verse");
const BibleFullNames = {
    [typings_1.Translation.BasicEnglish]: "Bible in Basic English (BBE)",
};
class Bible {
    translation;
    name;
    books = [];
    #verse = new Verse_1.Verse(this);
    constructor(translation) {
        if (!this.isValidTranslation(translation)) {
            throw new Error(`Invalid translation\n` + `Available: [${Object.keys(typings_1.Translation).join(", ")}]`);
        }
        this.translation = translation;
        this.name = BibleFullNames[translation];
        this.init();
    }
    init() {
        let bible = (0, getBible_1.default)(this.translation);
        let lines = bible.split("\n");
        lines.shift();
        lines.pop();
        let books = {};
        for (let line of lines) {
            let book = line.split(" ")[0];
            if (!books[book])
                books[book] = [];
            books[book].push(line);
        }
        for (let book in books) {
            let bookName = Object.entries(typings_1.DefinedBookAlias).find((x) => x[1] === book)?.[0] || book;
            bookName = /_\d/.test(bookName)
                ? bookName.split("_").reverse().join(" ")
                : bookName.replaceAll("_", " ");
            this.books.push(new Book_1.Book(bookName, books[book], this));
        }
    }
    getBook(name) {
        let parsedName = Book_1.Book.parseBookName(name);
        if (!Book_1.Book.isValidBookName(parsedName)) {
            throw new Error(`Invalid book name\n` + `Available: [${typings_1.Books.join(", ")}]`);
        }
        let book = this.books.find((x) => x.name === parsedName);
        if (!book)
            throw new Error(`Book not found [${JSON.stringify({ name, parsedName })}]`);
        return book;
    }
    getVerse(bookName, chapter, verse) {
        let book = this.getBook(bookName);
        let chp = book.getChapter(chapter);
        return chp.getVerse(verse);
    }
    #find(verse) {
        let found = this.#verse.find(verse);
        let text = "";
        for (let verse of found.verses) {
            text += (0, subscript_1.default)(verse + "");
            text += this.getVerse(found.book.name, found.chapter.chapterNo, verse) + "\n";
        }
        text += "\n- ";
        text +=
            found.book.preferredAbbr +
                " " +
                found.chapter.chapterNo +
                ":" +
                (found.verses.length == 1
                    ? found.verses[0]
                    : found.verses[0] + "-" + found.verses[found.verses.length - 1]);
        return {
            ...found,
            text,
        };
    }
    getReading(verse) {
        let found = this.#find(verse);
        return {
            text: found.text,
            verse: found.text.split("\n").pop().slice(2),
            data: {
                book: found.book.name,
                chapter: found.chapter.chapterNo,
                verses: found.verses,
            },
        };
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