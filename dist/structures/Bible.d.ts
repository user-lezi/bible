import { Translation } from "../typings";
import { Book } from "./Book";
export declare class Bible {
    translation: Translation;
    name: string;
    books: Book[];
    constructor(translation: Translation);
    init(): void;
    getBook(name: string): Book;
    isValidTranslation(translation: Translation): boolean;
}
export declare class BasicEnglishBible extends Bible {
    constructor();
}
//# sourceMappingURL=Bible.d.ts.map