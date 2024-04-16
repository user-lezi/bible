"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = exports.PreferredAbbr = exports.BookAbbr = exports.DefinedBookAlias = exports.Translation = void 0;
var Translation;
(function (Translation) {
    Translation["BasicEnglish"] = "bbe";
    Translation["KingJamesVersion"] = "kjv";
})(Translation || (exports.Translation = Translation = {}));
var DefinedBookAlias;
(function (DefinedBookAlias) {
    DefinedBookAlias["Genesis"] = "Gen";
    DefinedBookAlias["Exodus"] = "Exo";
    DefinedBookAlias["Leviticus"] = "Lev";
    DefinedBookAlias["Numbers"] = "Num";
    DefinedBookAlias["Deuteronomy"] = "Deu";
    DefinedBookAlias["Joshua"] = "Jos";
    DefinedBookAlias["Judges"] = "Jug";
    DefinedBookAlias["Ruth"] = "Rut";
    DefinedBookAlias["Samuel_1"] = "1Sa";
    DefinedBookAlias["Samuel_2"] = "2Sa";
    DefinedBookAlias["Kings_1"] = "1Ki";
    DefinedBookAlias["Kings_2"] = "2Ki";
    DefinedBookAlias["Chronicles_1"] = "1Ch";
    DefinedBookAlias["Chronicles_2"] = "2Ch";
    DefinedBookAlias["Ezra"] = "Ezr";
    DefinedBookAlias["Nehemiah"] = "Neh";
    DefinedBookAlias["Esther"] = "Est";
    DefinedBookAlias["Job"] = "Job";
    DefinedBookAlias["Psalms"] = "Psm";
    DefinedBookAlias["Proverbs"] = "Pro";
    DefinedBookAlias["Ecclesiastes"] = "Ecc";
    DefinedBookAlias["Song_of_Songs"] = "Son";
    DefinedBookAlias["Isaiah"] = "Isa";
    DefinedBookAlias["Jeremiah"] = "Jer";
    DefinedBookAlias["Lamentations"] = "Lam";
    DefinedBookAlias["Ezekiel"] = "Eze";
    DefinedBookAlias["Daniel"] = "Dan";
    DefinedBookAlias["Hosea"] = "Hos";
    DefinedBookAlias["Joel"] = "Joe";
    DefinedBookAlias["Amos"] = "Amo";
    DefinedBookAlias["Obadiah"] = "Oba";
    DefinedBookAlias["Jonah"] = "Jon";
    DefinedBookAlias["Micah"] = "Mic";
    DefinedBookAlias["Nahum"] = "Nah";
    DefinedBookAlias["Habakkuk"] = "Hab";
    DefinedBookAlias["Zephaniah"] = "Zep";
    DefinedBookAlias["Haggai"] = "Hag";
    DefinedBookAlias["Zechariah"] = "Zec";
    DefinedBookAlias["Malachi"] = "Mal";
    DefinedBookAlias["Matthew"] = "Mat";
    DefinedBookAlias["Mark"] = "Mak";
    DefinedBookAlias["Luke"] = "Luk";
    DefinedBookAlias["John"] = "Jhn";
    DefinedBookAlias["Acts"] = "Act";
    DefinedBookAlias["Romans"] = "Rom";
    DefinedBookAlias["Corinthians_1"] = "1Co";
    DefinedBookAlias["Corinthians_2"] = "2Co";
    DefinedBookAlias["Galatians"] = "Gal";
    DefinedBookAlias["Ephesians"] = "Eph";
    DefinedBookAlias["Philippians"] = "Phl";
    DefinedBookAlias["Colossians"] = "Col";
    DefinedBookAlias["Thessalonians_1"] = "1Ts";
    DefinedBookAlias["Thessalonians_2"] = "2Ts";
    DefinedBookAlias["Timothy_1"] = "1Ti";
    DefinedBookAlias["Timothy_2"] = "2Ti";
    DefinedBookAlias["Titus"] = "Tit";
    DefinedBookAlias["Philemon"] = "Phm";
    DefinedBookAlias["Hebrews"] = "Heb";
    DefinedBookAlias["James"] = "Jas";
    DefinedBookAlias["Peter_1"] = "1Pe";
    DefinedBookAlias["Peter_2"] = "2Pe";
    DefinedBookAlias["John_1"] = "1Jn";
    DefinedBookAlias["John_2"] = "2Jn";
    DefinedBookAlias["John_3"] = "3Jn";
    DefinedBookAlias["Jude"] = "Jud";
    DefinedBookAlias["Revelation"] = "Rev";
})(DefinedBookAlias || (exports.DefinedBookAlias = DefinedBookAlias = {}));
const BookAbbr = {
    Genesis: ["Gen"],
    Exodus: ["Exo", "Ex"],
    Leviticus: ["Lev"],
    Numbers: ["Num"],
    Deuteronomy: ["Deu", "Deut"],
    Joshua: ["Jos", "Josh"],
    Judges: ["Jug", "Judg"],
    Ruth: ["Rut"],
    Samuel_1: ["1Sa", "1Sam"],
    Samuel_2: ["2Sa", "2Sam"],
    Kings_1: ["1Ki", "1Kgs"],
    Kings_2: ["2Ki", "2Kgs"],
    Chronicles_1: ["1Ch", "1Chr"],
    Chronicles_2: ["2Ch", "2Chr"],
    Ezra: ["Ezr"],
    Nehemiah: ["Neh"],
    Esther: ["Est", "Esth"],
    Job: ["Jb"],
    Psalms: ["Psm", "Ps", "Psalm"],
    Proverbs: ["Pro", "Prov"],
    Ecclesiastes: ["Ecc", "Eccl"],
    Song_of_Songs: ["Son", "Song"],
    Isaiah: ["Isa", "Is"],
    Jeremiah: ["Jer"],
    Lamentations: ["Lam"],
    Ezekiel: ["Eze", "Ezek"],
    Daniel: ["Dan"],
    Hosea: ["Hos"],
    Joel: ["Joe"],
    Amos: ["Amo"],
    Obadiah: ["Oba", "Obad"],
    Jonah: ["Jon"],
    Micah: ["Mic"],
    Nahum: ["Nah"],
    Habakkuk: ["Hab"],
    Zephaniah: ["Zep", "Zeph"],
    Haggai: ["Hag"],
    Zechariah: ["Zec", "Zech"],
    Malachi: ["Mal"],
    Matthew: ["Mat", "Mt", "Matt"],
    Mark: ["Mak", "Mk"],
    Luke: ["Luk", "Lk"],
    John: ["Jhn", "Jn"],
    Acts: ["Act"],
    Romans: ["Rom"],
    Corinthians_1: ["1Co", "1Cor"],
    Corinthians_2: ["2Co", "2Cor"],
    Galatians: ["Gal"],
    Ephesians: ["Eph"],
    Philippians: ["Phl", "Phil"],
    Colossians: ["Col"],
    Thessalonians_1: ["1Ts", "1Thes"],
    Thessalonians_2: ["2Ts", "2Thes"],
    Timothy_1: ["1Ti", "1Tim"],
    Timothy_2: ["2Ti", "2Tim"],
    Titus: ["Tit"],
    Philemon: ["Phm", "Phlm"],
    Hebrews: ["Heb"],
    James: ["Jas"],
    Peter_1: ["1Pe", "1Pet"],
    Peter_2: ["2Pe", "2Pet"],
    John_1: ["1Jn", "1Jhn"],
    John_2: ["2Jn", "2Jhn"],
    John_3: ["3Jn", "3Jhn"],
    Jude: ["Jud"],
    Revelation: ["Rev"],
};
exports.BookAbbr = BookAbbr;
for (let book in BookAbbr) {
    let abb = BookAbbr[book];
    let newAbb = [];
    for (let ab of abb) {
        if (/^\d/.test(ab[0])) {
            let abb = ab[0] + " " + ab.slice(1);
            newAbb.push(abb, abb + ".");
        }
        newAbb.push(ab, ab + ".");
    }
    newAbb.push(book, /_\d/.test(book) ? book.split("_").reverse().join(" ") : book.replaceAll("_", " "));
    BookAbbr[book] = [...new Set(newAbb)];
}
var PreferredAbbr;
(function (PreferredAbbr) {
    PreferredAbbr["Genesis"] = "Gen";
    PreferredAbbr["Exodus"] = "Exo";
    PreferredAbbr["Leviticus"] = "Lev";
    PreferredAbbr["Numbers"] = "Num";
    PreferredAbbr["Deuteronomy"] = "Deut";
    PreferredAbbr["Joshua"] = "Josh";
    PreferredAbbr["Judges"] = "Judg";
    PreferredAbbr["Ruth"] = "Ruth";
    PreferredAbbr["Samuel_1"] = "1 Sam";
    PreferredAbbr["Samuel_2"] = "2 Sam";
    PreferredAbbr["Kings_1"] = "1 Kgs";
    PreferredAbbr["Kings_2"] = "2 Kgs";
    PreferredAbbr["Chronicles_1"] = "1 Chr";
    PreferredAbbr["Chronicles_2"] = "2 Chr";
    PreferredAbbr["Ezra"] = "Ezr";
    PreferredAbbr["Nehemiah"] = "Neh";
    PreferredAbbr["Esther"] = "Esth";
    PreferredAbbr["Job"] = "Job";
    PreferredAbbr["Psalms"] = "Ps";
    PreferredAbbr["Proverbs"] = "Prov";
    PreferredAbbr["Ecclesiastes"] = "Eccl";
    PreferredAbbr["Song_of_Songs"] = "Song";
    PreferredAbbr["Isaiah"] = "Is";
    PreferredAbbr["Jeremiah"] = "Jer";
    PreferredAbbr["Lamentations"] = "Lam";
    PreferredAbbr["Ezekiel"] = "Ezek";
    PreferredAbbr["Daniel"] = "Dan";
    PreferredAbbr["Hosea"] = "Hos";
    PreferredAbbr["Joel"] = "Joel";
    PreferredAbbr["Amos"] = "Amos";
    PreferredAbbr["Obadiah"] = "Obad";
    PreferredAbbr["Jonah"] = "Jon";
    PreferredAbbr["Micah"] = "Mic";
    PreferredAbbr["Nahum"] = "Nah";
    PreferredAbbr["Habakkuk"] = "Hab";
    PreferredAbbr["Zephaniah"] = "Zeph";
    PreferredAbbr["Haggai"] = "Hag";
    PreferredAbbr["Zechariah"] = "Zech";
    PreferredAbbr["Malachi"] = "Mal";
    PreferredAbbr["Matthew"] = "Mt";
    PreferredAbbr["Mark"] = "Mk";
    PreferredAbbr["Luke"] = "Lk";
    PreferredAbbr["John"] = "Jn";
    PreferredAbbr["Acts"] = "Act";
    PreferredAbbr["Romans"] = "Rom";
    PreferredAbbr["Corinthians_1"] = "1 Cor";
    PreferredAbbr["Corinthians_2"] = "2 Cor";
    PreferredAbbr["Galatians"] = "Gal";
    PreferredAbbr["Ephesians"] = "Eph";
    PreferredAbbr["Philippians"] = "Phil";
    PreferredAbbr["Colossians"] = "Col";
    PreferredAbbr["Thessalonians_1"] = "1 Thes";
    PreferredAbbr["Thessalonians_2"] = "2 Thes";
    PreferredAbbr["Timothy_1"] = "1 Tim";
    PreferredAbbr["Timothy_2"] = "2 Tim";
    PreferredAbbr["Titus"] = "Tit";
    PreferredAbbr["Philemon"] = "Phlm";
    PreferredAbbr["Hebrews"] = "Heb";
    PreferredAbbr["James"] = "Jas";
    PreferredAbbr["Peter_1"] = "1 Pet";
    PreferredAbbr["Peter_2"] = "2 Pet";
    PreferredAbbr["John_1"] = "1 Jn";
    PreferredAbbr["John_2"] = "2 Jn";
    PreferredAbbr["John_3"] = "3 Jn";
    PreferredAbbr["Jude"] = "Jud";
    PreferredAbbr["Revelation"] = "Rev";
})(PreferredAbbr || (exports.PreferredAbbr = PreferredAbbr = {}));
exports.Books = Object.keys(DefinedBookAlias).map((name) => /_\d/.test(name) ? name.split("_").reverse().join(" ") : name.replaceAll("_", " "));
//# sourceMappingURL=typings.js.map