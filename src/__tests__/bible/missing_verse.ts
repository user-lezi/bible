import { Translation } from "../../index"
import getBible from "../../functions/getBible"

import { writeFileSync } from "fs"
import { join } from "path"

let bible = getBible(Translation.KingJamesVersion)
let lines = bible.split("\n")
let missingLines: string[] = []

let data: any = {}

for (let line of lines) {
  let index = lines.indexOf(line)
  if (!line.includes("undefined")) continue
  let newLine = `${line.split(" ")[0]} ${line.split(" ")[1]}`
  if (!data[newLine]) {
    missingLines.push(line)
    continue
  }
  newLine += ` ${data[newLine]}`

  lines[index] = newLine
}

writeFileSync(join("bible", Translation.BasicEnglish + ".txt"), lines.join("\n"))

console.log(missingLines.join("\n"))
