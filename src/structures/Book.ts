
import { Books, DefinedBookAlias } from "../typings";
import { Chapter } from "./Chapter";

export class Book {
  name: string;
  abbr: string;
  chapters: Chapter[] = [];
  constructor(name: string, chaptersRaw: string[]) {
    if(!Book.isValidBookName(name)) {
      throw new Error(
        `Invalid book name: ${name}\n` +
        `Available: [${Books.join(", ")}]`
      );
    }
    this.name = name;
    name = /\d /.test(name) ? name.split(' ').reverse().join('_') : name.replaceAll(' ', '_')
    this.abbr = Object.entries(DefinedBookAlias).find(x => x[0] === name)?.[1] || name;

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
    return Books.includes(name);
  }
}