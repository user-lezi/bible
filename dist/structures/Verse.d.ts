import { Bible } from "./Bible";
import { Book } from "./Book";
import { Chapter } from "./Chapter";
export interface ParsedVerse {
    book: string;
    chapter: number;
    verses: number[];
}
export interface IVerse {
    book: Book;
    chapter: Chapter;
    verses: number[];
}
export declare class Verse {
    bible: Bible;
    bookNameRegex: string;
    numRegex: string;
    constructor(bible: Bible);
    find(verse: string): IVerse;
    parseVerse(verse: string): ParsedVerse;
}
//# sourceMappingURL=Verse.d.ts.map