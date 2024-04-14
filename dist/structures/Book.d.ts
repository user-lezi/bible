import { Chapter } from "./Chapter";
export declare class Book {
    name: string;
    abbr: string;
    chapters: Chapter[];
    constructor(name: string, chaptersRaw: string[]);
    static isValidBookName(name: string): boolean;
}
//# sourceMappingURL=Book.d.ts.map