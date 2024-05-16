import { getReading } from "../index"

let verse = "Psalm 91:6"
let start = Date.now()
console.log(getReading(verse))
console.log(`Took ${Date.now() - start}ms`)
