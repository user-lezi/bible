import { PreferredAbbr } from "../typings";
import { Chapter } from "./Chapter";
export declare class Book {
    name: string;
    abbr: string;
    allAbbr: string[];
    preferredAbbr: PreferredAbbr;
    chapters: Chapter[];
    constructor(name: string, chaptersRaw: string[]);
    static isValidBookName(name: string): boolean;
    static parseBookName(name: string): string;
    static cleanName(name: string): string;
    static uncleanName(name: string): string;
}
//# sourceMappingURL=Book.d.ts.map