import getBible from "./functions/getBible";
import { Translation } from "./typings";
import { Bible } from "./structures/Bible";
export { getBible };
export * from "./typings";
export * from "./structures";
export declare function getReading(verse: string): {
    translation: Translation;
    bible: Bible;
    text: string;
    verse: string;
    data: {
        book: string;
        chapter: number;
        verses: number[];
    };
}[];
//# sourceMappingURL=index.d.ts.map