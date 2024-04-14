
import { Books, DefinedBookAlias, BookAbbr, PreferredAbbr } from "../typings";
import { Chapter } from "./Chapter";

export class Book {
  name: string;
  abbr: string;
  allAbbr: string[];
  preferredAbbr: PreferredAbbr;
  chapters: Chapter[] = [];
  constructor(name: string, chaptersRaw: string[]) {
    if(!Book.isValidBookName(name)) {
      throw new Error(
        `Invalid book name: ${name}\n` +
        `Available: [${Books.join(", ")}]`
      );
    }
    this.name = name;
    name = Book.uncleanName(name);
    this.abbr = Object.entries(DefinedBookAlias).find(x => x[0] === name)?.[1] || name;
    this.allAbbr = BookAbbr[name];
    this.preferredAbbr = PreferredAbbr[name as keyof typeof PreferredAbbr];

    let c: { [key: string]: string[]} = {};
    for (let chapterRaw of chaptersRaw) {
      let chp = chapterRaw.split(' ')[1].split(':')[0];
      if(!c[chp]) c[chp] = [];
      c[chp].push(chapterRaw);
    }

    for (let chp in c) {
      this.chapters.push(new Chapter(parseInt(chp), c[chp]));
    };

    
  }

  static isValidBookName(name: string): boolean {
    return Book.parseBookName(name) !== ''
  }


  static parseBookName(name: string): string {
    let bookName = '';
    for (let book in BookAbbr) {
      let abbrs = BookAbbr[book];
      for (let abbr of abbrs) {
        if(name.toLowerCase() == abbr.toLowerCase()) {
          bookName = abbrs[abbrs.length - 1];
          break;
        }
      }
    }
    return bookName;
  }

  static cleanName(name: string): string {
    return /_\d/.test(name) ?
      name.split('_').reverse().join(' ') :
      name.replaceAll(' ', '_');
  }

  static uncleanName(name: string): string {
    return /_\d/.test(name) ?
      name.split(' ').reverse().join('_') :
      name.replaceAll(' ', '_');
  }
}