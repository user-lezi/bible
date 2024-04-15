"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = void 0;
class Chapter {
    chapterNo;
    book;
    verseCount;
    verses = [];
    constructor(chapterNo, verses, book) {
        this.chapterNo = chapterNo;
        this.book = book;
        for (let verse of verses) {
            let [book, verseNo, ...text] = verse.split(" ");
            this.verses.push(text.join(" "));
        }
        this.verseCount = verses.length;
    }
    getVerse(n) {
        if (typeof n !== "number" || n < 1 || n > this.verseCount)
            return "";
        return this.verses[n - 1];
    }
}
exports.Chapter = Chapter;
//# sourceMappingURL=Chapter.js.map