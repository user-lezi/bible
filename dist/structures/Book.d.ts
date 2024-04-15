import { PreferredAbbr } from "../typings";
import { Chapter } from "./Chapter";
import { Bible } from "./Bible";
export declare class Book {
    bible: Bible;
    name: string;
    abbr: string;
    allAbbr: string[];
    preferredAbbr: PreferredAbbr;
    chapters: Chapter[];
    chaptersCount: number;
    constructor(name: string, chaptersRaw: string[], bible: Bible);
    getChapter(chapterNo: number): Chapter;
    static isValidBookName(name: string): boolean;
    static parseBookName(name: string): string;
    static cleanName(name: string): string;
    static uncleanName(name: string): string;
}
//# sourceMappingURL=Book.d.ts.map