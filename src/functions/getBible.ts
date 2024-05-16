import { readFileSync } from "fs"
import { join } from "path"
import { Translation } from "../typings"
import { decompress } from "../functions/compress"

export default function getBible(translation: Translation) {
  let path = join(__dirname, "..", "..", "compressedBible", translation + ".txt")

  return decompress(readFileSync(path, "utf8"))
}
