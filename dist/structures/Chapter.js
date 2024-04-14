"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = void 0;
class Chapter {
    chapterNo;
    verseCount;
    verses = [];
    constructor(chapterNo, verses) {
        this.chapterNo = chapterNo;
        for (let verse of verses) {
            let [book, verseNo, ...text] = verse.split(' ');
            this.verses.push(text.join(' '));
        }
        this.verseCount = verses.length;
    }
}
exports.Chapter = Chapter;
//# sourceMappingURL=Chapter.js.map