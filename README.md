# bible.ts
> Bible as a npm package
## ⬇️ Installation
```bash
npm i bible.ts
```
then,
```ts
import * as BibleTs from "bible.ts";
```

## 📋 Usage
```ts
import { BasicEnglishBible } from "bible.ts"; // or
// const { BasicEnglishBible } = BibleTs;

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
  - Purely Downloaded from [here](http://www.o-bible.com/download/bbe.gz).
```ts
import { BasicEnglishBible, Bible, Translation } from 'bible.ts';
new BasicEnglishBible(); // or
new Bible(Translation.BasicEnglish);
```
- **King James Version Bible (KJV)**
  - Download from [here](http://www.o-bible.com/download/kjv.gz) and modified accordingly to be parsed by the package.
```ts
import { KingJamesVersionBible, Bible, Translation } from 'bible.ts';
new KingJamesVersionBible(); // or
new Bible(Translation.KingJamesVersion);
```
> More will be adding soon..


## ⏰ Changelog
### @0.0.2
- Added another translation `KingJamesVersionBible()`
- Added `getReading(verse: string)` to get reading from all translations at single call.
### @0.0.1
- First translation in package `BasicEnglishBible()`
- Main class `Bible` has been added.

> If any changes to be made or issues please contact me through my discord `leziuwu`👍

## Peace be with you ✝️

