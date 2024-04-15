import { Books, DefinedBookAlias, BookAbbr, PreferredAbbr } from "../typings"
import { Chapter } from "./Chapter"
import { Bible } from "./Bible"

export class Book {
  name: string
  abbr: string
  allAbbr: string[]
  preferredAbbr: PreferredAbbr
  chapters: Chapter[] = []
  chaptersCount: number
  constructor(
    name: string,
    chaptersRaw: string[],
    public bible: Bible
  ) {
    if (!Book.isValidBookName(name)) {
      throw new Error(`Invalid book name: ${name}\n` + `Available: [${Books.join(", ")}]`)
    }
    this.name = name
    name = Book.uncleanName(name)
    this.abbr = Object.entries(DefinedBookAlias).find((x) => x[0] === name)?.[1] || name
    this.allAbbr = BookAbbr[name]
    this.preferredAbbr = PreferredAbbr[name as keyof typeof PreferredAbbr]

    let c: { [key: string]: string[] } = {}
    for (let chapterRaw of chaptersRaw) {
      let chp = chapterRaw.split(" ")[1].split(":")[0]
      if (!c[chp]) c[chp] = []
      c[chp].push(chapterRaw)
    }

    for (let chp in c) {
      this.chapters.push(new Chapter(parseInt(chp), c[chp], this))
    }
    this.chaptersCount = this.chapters.length
  }

  getChapter(chapterNo: number): Chapter {
    if (typeof chapterNo !== "number" || chapterNo < 1 || chapterNo > this.chaptersCount) {
      throw new RangeError(
        `Invalid chapter number: ${chapterNo}\n` + `Available: [1, ${this.chaptersCount}]`
      )
    }
    return this.chapters[chapterNo - 1]
  }

  static isValidBookName(name: string): boolean {
    return Book.parseBookName(name) !== ""
  }

  static parseBookName(name: string): string {
    let bookName = ""
    for (let book in BookAbbr) {
      let abbrs = BookAbbr[book]
      for (let abbr of abbrs) {
        if (name.toLowerCase() == abbr.toLowerCase()) {
          bookName = abbrs[abbrs.length - 1]
          break
        }
      }
    }
    return bookName
  }

  static cleanName(name: string): string {
    return /_\d/.test(name) ? name.split("_").reverse().join(" ") : name.replaceAll(" ", "_")
  }

  static uncleanName(name: string): string {
    return /_\d/.test(name) ? name.split(" ").reverse().join("_") : name.replaceAll(" ", "_")
  }
}
