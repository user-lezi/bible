

export class Chapter {
  verseCount: number;
  verses: string[] = [];
  constructor(public chapterNo: number, verses: string[]) {
    for (let verse of verses) {
      let [book, verseNo, ...text] = verse.split(' ');
      this.verses.push(text.join(' '));
    }
    this.verseCount = verses.length;
  }
}