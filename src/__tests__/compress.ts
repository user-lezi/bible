import { compress, decompress } from "../functions/compress"
import { readdirSync, writeFileSync, readFileSync, statSync } from "fs"
import { join } from "path"

let toCompress = readdirSync(join(__dirname, "..", "..", "bible"))
for (let file of toCompress) {
  let from = join(__dirname, "..", "..", "bible", file)
  let to = join(__dirname, "..", "..", "compressedBible", file)

  console.log(`Compressing "${from}" to "${to}"`)
  let rawBible = readFileSync(from, "utf8")
  let compressed = compress(rawBible)
  writeFileSync(to, compressed)
  console.log(`Raw: ${getFileSize(from)}kb`)
  console.log(`Compressed: ${getFileSize(to)}kb`)
}

function getFileSize(path: string): number {
  return Number((statSync(path).size / 1024).toFixed(2))
}
