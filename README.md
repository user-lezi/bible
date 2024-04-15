# @lezii/bible
> Bible as a npm package
## ⬇️ Installation
```bash
npm i @lezii/bible
```
then,
```ts
import * as BibleJs from "@lezii/package";
```

## 📋 Usage
```ts
import { BasicEnglishBible } from "@lezii/package"; // or
// const { BasicEnglishBible } = BibleJs;

let bible = new BasicEnglishBible();
let reading = 'John 14:6';
console.log(
  bible.getReading(reading)
); // => 
/* 
  {
    text: '₆Jesus said to him, I am the true and living way: no one comes to the Father but by me.',
    verse: 'Jn 14:6',
    data: {
      book: 'John',
      chapter: 14,
      verse: 6
    }
  }
*/
```

## 🔠 Translations Available.
- **Bible in Basic English (BBE)**
  - Purely Downloaded from [here](http://www.o-bible.com/download/bbe.gz)
```ts
import { BasicEnglishBible, Bible, Translation } from '@lezii/bible';
new BasicEnglishBible(); // or
new Bible(Translation.BasicEnglish);
```
> More will be adding soon..


## ⏰ Changelog
### @0.0.1
- First translation in package `BasicEnglishBible()`
- Main class `Bible` has been added.

> If any changes to be made or issues please contact me through my discord `leziuwu`👍

## Peace be with you ✝️

