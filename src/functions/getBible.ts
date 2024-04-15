import { readFileSync } from "fs"
import { join } from "path"
import { Translation } from "../typings"

export default function getBible(translation: Translation) {
  let path = join(__dirname, "..", "..", "bible", translation + ".txt")

  return readFileSync(path, "utf8")
}
