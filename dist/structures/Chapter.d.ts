import { Book } from "./Book";
export declare class Chapter {
    chapterNo: number;
    book: Book;
    verseCount: number;
    verses: string[];
    constructor(chapterNo: number, verses: string[], book: Book);
    getVerse(n: number): string;
}
//# sourceMappingURL=Chapter.d.ts.map