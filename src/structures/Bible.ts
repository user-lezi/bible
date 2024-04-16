import { Translation, DefinedBookAlias, Books } from "../typings"
import getBible from "../functions/getBible"
import subscript from "../functions/subscript"
import { Book } from "./Book"
import { Verse } from "./Verse"

const BibleFullNames = {
  [Translation.BasicEnglish]: "Bible in Basic English (BBE)",
  [Translation.KingJamesVersion]: "King James Version Bible (KJV)",
}

export interface Reading {
  text: string
  verse: string
  data: {
    book: string
    chapter: number
    verses: number[]
  }
}

export class Bible {
  translation: Translation
  name: string
  books: Book[] = []
  #verse = new Verse(this)
  constructor(translation: Translation) {
    if (!this.isValidTranslation(translation)) {
      throw new Error(
        `Invalid translation\n` + `Available: [${Object.keys(Translation).join(", ")}]`
      )
    }
    this.translation = translation
    this.name = BibleFullNames[translation]
    this.init()
  }

  init() {
    // Load entire bible in the variable
    let bible = getBible(this.translation)
    // Split bible into lines
    let lines = bible.split("\n")
    // Remove first and last line
    lines.shift()
    lines.pop()

    /* Loop */
    let books: { [key: string]: string[] } = {}
    for (let line of lines) {
      let book = line.split(" ")[0]
      if (!books[book]) books[book] = []
      books[book].push(line)
    }

    // Create books
    for (let book in books) {
      let bookName = Object.entries(DefinedBookAlias).find((x) => x[1] === book)?.[0] || book
      bookName = /_\d/.test(bookName)
        ? bookName.split("_").reverse().join(" ")
        : bookName.replaceAll("_", " ")
      this.books.push(new Book(bookName, books[book], this))
    }
  }
  getBook(name: string): Book {
    let parsedName = Book.parseBookName(name)
    if (!Book.isValidBookName(parsedName)) {
      throw new Error(`Invalid book name\n` + `Available: [${Books.join(", ")}]`)
    }

    let book = this.books.find((x) => x.name === parsedName)
    if (!book) throw new Error(`Book not found [${JSON.stringify({ name, parsedName })}]`)
    return book
  }

  getVerse(bookName: string, chapter: number, verse: number): string {
    let book = this.getBook(bookName)
    let chp = book.getChapter(chapter)
    return chp.getVerse(verse)
  }

  #find(verse: string): any {
    let found = this.#verse.find(verse)
    let text = ""

    for (let verse of found.verses) {
      text += subscript(verse + "")
      text += this.getVerse(found.book.name, found.chapter.chapterNo, verse) + "\n"
    }

    text += "\n- "
    text +=
      found.book.preferredAbbr +
      " " +
      found.chapter.chapterNo +
      ":" +
      (found.verses.length == 1
        ? found.verses[0]
        : found.verses[0] + "-" + found.verses[found.verses.length - 1])

    return {
      ...found,
      text,
    }
  }

  getReading(verse: string): Reading {
    let found = this.#find(verse)
    return {
      text: found.text,
      verse: found.text.split("\n").pop().slice(2),
      data: {
        book: found.book.name,
        chapter: found.chapter.chapterNo,
        verses: found.verses,
      },
    }
  }

  isValidTranslation(translation: Translation): boolean {
    return Object.values(Translation).includes(translation)
  }
}

export class BasicEnglishBible extends Bible {
  constructor() {
    super(Translation.BasicEnglish)
  }
}

export class KingJamesVersionBible extends Bible {
  constructor() {
    super(Translation.KingJamesVersion)
  }
}
