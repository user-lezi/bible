import { Book } from "./Book"

export class Chapter {
  verseCount: number
  verses: string[] = []
  constructor(
    public chapterNo: number,
    verses: string[],
    public book: Book
  ) {
    for (let verse of verses) {
      let [book, verseNo, ...text] = verse.split(" ")
      this.verses.push(text.join(" "))
    }
    this.verseCount = verses.length
  }

  getVerse(n: number): string {
    if (typeof n !== "number" || n < 1 || n > this.verseCount) return ""
    return this.verses[n - 1]
  }
}
