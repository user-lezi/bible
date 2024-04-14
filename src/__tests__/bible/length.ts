import { Translation } from "../../index";
import getBible from "../../functions/getBible";

let bible = getBible(Translation.BasicEnglish);
console.log(bible.length);
