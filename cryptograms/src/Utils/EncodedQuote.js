import getRandomInt from "./RandomNumber";
//takes in a quote and returns the quote in a coded form
export default function encodedQuote(quote) {
  let map = MapOfUniqueLetters(quote);
  let quoteArray = quote.toLowerCase().split("");
  let encodedQuote = "";
  for (let letter in quoteArray) {
    if (map.has(quoteArray[letter])) {
      let codedletter = map.get(quoteArray[letter]);
      encodedQuote = encodedQuote + codedletter;
    } else {
      encodedQuote = encodedQuote + quoteArray[letter];
    }
  }
  return encodedQuote;
}

// takes in a quoute an returns a map(keys are orginal quote letters, values are the encoded quote letters)
let coderArray = [
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122
];
function MapOfUniqueLetters(quote) {
  let quoteArray = quote
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "")
    .toLowerCase()
    .split("");
  let mapCharToCount = new Map();
  for (let letter in quoteArray)
    if (!mapCharToCount.has(quoteArray[letter])) {
      let coded = cb(quoteArray[letter]);
      mapCharToCount.set(quoteArray[letter], coded);
    }
  coderArray = [
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122
  ];
  return mapCharToCount;
}

// helper function that takes in a letter and and returns a new letter that hasnt been used
function cb(letter) {
  let letterCode = letter.charCodeAt(0);
  let tempIndex = coderArray.indexOf(letterCode);
  coderArray.splice(tempIndex, 1);
  const rand = getRandomInt(0, coderArray.length - 1);
  let codedLetter = coderArray[rand];
  coderArray.splice(rand, 1);
  coderArray.splice(tempIndex, 0, letterCode);
  return String.fromCharCode(codedLetter);
}
