import { getReading } from "../index"

let verse = "John 14:6-7"
let start = Date.now()
console.log(getReading(verse))
console.log(`Took ${Date.now() - start}ms`)
