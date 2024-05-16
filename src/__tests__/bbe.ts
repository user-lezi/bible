import { BasicEnglishBible } from "../index"

let start = Date.now()
let bible = new BasicEnglishBible()

console.log(bible.getReading("Ps 2:1ff"))
console.log(Date.now() - start)
