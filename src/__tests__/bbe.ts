import { BasicEnglishBible, BookAbbr } from "../index"

let start = Date.now()
let bible = new BasicEnglishBible()

console.log(bible.getReading("John 14:6"))
console.log(Date.now() - start)
