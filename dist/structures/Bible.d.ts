import { Translation } from "../typings";
import { Book } from "./Book";
export interface Reading {
    text: string;
    verse: string;
    data: {
        book: string;
        chapter: number;
        verses: number[];
    };
}
export declare class Bible {
    #private;
    translation: Translation;
    name: string;
    books: Book[];
    constructor(translation: Translation);
    init(): void;
    getBook(name: string): Book;
    getVerse(bookName: string, chapter: number, verse: number): string;
    getReading(verse: string): Reading;
    isValidTranslation(translation: Translation): boolean;
}
export declare class BasicEnglishBible extends Bible {
    constructor();
}
export declare class KingJamesVersionBible extends Bible {
    constructor();
}
//# sourceMappingURL=Bible.d.ts.map