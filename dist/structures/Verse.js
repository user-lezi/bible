"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verse = void 0;
const typings_1 = require("../typings");
class Verse {
    bible;
    bookNameRegex = `(${Object.values(typings_1.BookAbbr)
        .map((x) => x.join("|").replace(".", "\\."))
        .join("|")})`;
    numRegex = "(\\d+)";
    constructor(bible) {
        this.bible = bible;
    }
    find(verse) {
        if (typeof verse !== "string" || verse.length < 1)
            throw new Error("Verse must be a string");
        let parsedVerse = this.parseVerse(verse);
        let book = this.bible.getBook(parsedVerse.book);
        if (!book)
            throw new Error("Book not found");
        if (parsedVerse.chapter > book.chaptersCount)
            throw new Error(`Chapter not found in book "${book.name}" [${parsedVerse.chapter} > ${book.chaptersCount}]`);
        let chapter = book.getChapter(parsedVerse.chapter);
        let verses = [];
        if (parsedVerse.verses.length > 0) {
            let maxVerse = Math.max(...parsedVerse.verses);
            if (maxVerse > chapter.verseCount)
                throw new Error("Verse not found");
            verses = [...new Set(parsedVerse.verses)].sort((a, b) => a - b);
        }
        else {
            let end = chapter.verseCount;
            for (let i = 1; i <= end; i++) {
                verses.push(i);
            }
        }
        return {
            book: book,
            chapter: chapter,
            verses: verses,
        };
    }
    parseVerse(verse) {
        let regexps = [
            new RegExp(`^${this.bookNameRegex} +${this.numRegex} *: *${this.numRegex}$`, "i"),
            new RegExp(`^${this.bookNameRegex} +${this.numRegex} *: *${this.numRegex} *- *${this.numRegex}$`, "i"),
            new RegExp(`^${this.bookNameRegex} +${this.numRegex}$`, "i"),
            new RegExp(`^${this.bookNameRegex} +${this.numRegex} *: *${this.numRegex}f$`, "i"),
            new RegExp(`^${this.bookNameRegex} +${this.numRegex} *: *${this.numRegex}ff$`, "i"),
        ];
        if (regexps[0].test(verse)) {
            let match = verse.match(regexps[0]) || [];
            let book = match[1];
            let chapterNum = parseInt(match[2]);
            let verseNum = parseInt(match[3]);
            if (chapterNum < 1)
                throw new Error("Chapter number must be greater than 0");
            if (verseNum < 1)
                throw new Error("Verse number must be greater than 0");
            return {
                book: book,
                chapter: chapterNum,
                verses: [verseNum],
            };
        }
        else if (regexps[1].test(verse)) {
            let match = verse.match(regexps[1]) || [];
            let book = match[1];
            let chapterNum = parseInt(match[2]);
            let verseNum = parseInt(match[3]);
            let verseEnd = parseInt(match[4]);
            if (chapterNum < 1)
                throw new Error("Chapter number must be greater than 0");
            if (verseNum < 1)
                throw new Error("Verse start number must be greater than 0");
            if (verseEnd < 1)
                throw new Error("Verse end number must be greater than 0");
            if (verseEnd < verseNum)
                throw new Error("Verse end number must be greater than verse start number");
            let verses = [];
            for (let i = verseNum; i <= verseEnd; i++) {
                verses.push(i);
            }
            return {
                book: book,
                chapter: chapterNum,
                verses,
            };
        }
        else if (regexps[2].test(verse)) {
            let match = verse.match(regexps[2]) || [];
            let book = match[1];
            let chapterNum = parseInt(match[2]);
            if (chapterNum < 1)
                throw new Error("Chapter number must be greater than 0");
            return {
                book: book,
                chapter: chapterNum,
                verses: [],
            };
        }
        else if (regexps[3].test(verse)) {
            let match = verse.match(regexps[3]) || [];
            let book = match[1];
            let chapterNum = parseInt(match[2]);
            let verseNum = parseInt(match[3]);
            if (chapterNum < 1)
                throw new Error("Chapter number must be greater than 0");
            if (verseNum < 1)
                throw new Error("Verse number must be greater than 0");
            return {
                book: book,
                chapter: chapterNum,
                verses: [verseNum, verseNum + 1],
            };
        }
        else if (regexps[4].test(verse)) {
            let match = verse.match(regexps[4]) || [];
            let book = match[1];
            let chapterNum = parseInt(match[2]);
            let verseNum = parseInt(match[3]);
            if (chapterNum < 1)
                throw new Error("Chapter number must be greater than 0");
            if (verseNum < 1)
                throw new Error("Verse number must be greater than 0");
            let verses = [];
            let Book = this.bible.getBook(book);
            if (!Book)
                throw new Error("Book not found");
            if (chapterNum > Book.chaptersCount)
                throw new Error(`Chapter not found in book "${Book.name}" [${chapterNum} > ${Book.chaptersCount}]`);
            let chapter = Book.getChapter(chapterNum);
            let verseCount = chapter.verseCount;
            for (let i = verseNum; i <= verseCount; i++) {
                verses.push(i);
            }
            return {
                book: book,
                chapter: chapterNum,
                verses,
            };
        }
        throw new Error("Invalid verse");
    }
}
exports.Verse = Verse;
//# sourceMappingURL=Verse.js.map