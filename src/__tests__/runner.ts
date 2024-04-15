import prompt from "../functions/prompt"
import { existsSync, statSync } from "fs"
import { join } from "path"

async function main(): Promise<void> {
  let testNamesStr = (await prompt("Enter test names (separated by commas):")) || ""
  let testNames: string[] = testNamesStr.split(",").map((name) => name.trim())

  let testFiles: string[] = []
  for (let name of testNames) {
    if (!name) continue
    name = name.replace(/ /g, "/")
    name = `./${name}.js`
    let path: string = join(__dirname, name)
    if (!existsSync(path) || statSync(path).isDirectory()) continue
    testFiles.push(name)
  }

  if (testFiles.length === 0) {
    console.log("No tests found")
    return
  }

  console.log(`Running ${testFiles.length} tests`)
  for (let file of testFiles) {
    console.log(`> "${join("dist", "__tests__", file)}"`)
    import(file)
  }

  return
}

main()
