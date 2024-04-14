import { Translation, DefinedBookAlias, Books} from "../typings";
import getBible from "../functions/getBible";
import { Book } from "./Book";


const BibleFullNames = {
  [Translation.BasicEnglish]: 'Bible in Basic English (BBE)'
}

export class Bible {
  translation: Translation;
  name: string;
  books: Book[] = [];
  constructor(translation: Translation) {
    if(!this.isValidTranslation(translation)) {
      throw new Error(
        `Invalid translation\n` +
        `Available: [${Object.keys(Translation).join(", ")}]`
      );
    }
    this.translation = translation;
    this.name = BibleFullNames[translation];
    this.init();
  }

  init() {
    // Load entire bible in the variable
    let bible = getBible(this.translation);
    // Split bible into lines
    let lines = bible.split('\n');
    // Remove first and last line
    lines.shift();
    lines.pop();

    /* Loop */
    let books: { [key: string]: string[] } = {};
    for (let line of lines) {
      let book = line.split(' ')[0];
      if(!books[book]) books[book] = [];
      books[book].push(line);
    }

    // Create books
    for (let book in books) {
      let bookName = Object.entries(DefinedBookAlias).find(x => x[1] === book)?.[0] || book;
      bookName = /_\d/.test(bookName) ? bookName.split('_').reverse().join(' ') : bookName.replaceAll('_', ' ');
      this.books.push(new Book(bookName, books[book]));
    }


  }


  getBook(name: string): Book {
    if(!Book.isValidBookName(name)) {
      throw new Error(
        `Invalid book name\n` +
        `Available: [${Books.join(", ")}]`
      );
    }

    return this.books.find(x => x.name === name) || this.books[0];
  }

  isValidTranslation(translation: Translation): boolean {
    return Object.values(Translation).includes(translation);
  }
}


export class BasicEnglishBible extends Bible {
  constructor() {
    super(Translation.BasicEnglish);
  }
}

