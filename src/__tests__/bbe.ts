import { KingJamesVersionBible, BookAbbr } from "../index"

let start = Date.now()
let bible = new KingJamesVersionBible()

console.log(bible.getReading("Ps 2:1"))
console.log(Date.now() - start)
