import getBible from "./functions/getBible"
import { Translation } from "./typings"
import { Bible } from "./structures/Bible"
export { getBible }
export * from "./typings"
export * from "./structures"

let translations = Object.values(Translation) as Translation[]

export function getReading(verse: string) {
  let output = []
  for (let translation of translations) {
    let bible = new Bible(translation)
    let reading = bible.getReading(verse)
    if (reading) {
      output.push({
        ...reading,
        translation,
        bible,
      })
    }
  }
  return output
}
