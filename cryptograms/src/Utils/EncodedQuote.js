export default function MapOfUniqueLetters(quote){
let quoteArray = quote.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase().split("");
let mapCharToCount = new Map();
for( let letter in quoteArray)
  if( !mapCharToCount.has(letter)) {
  let coded = cb(quoteArray[letter]);
  mapCharToCount.set(quoteArray[letter],coded);
}
coderArray=[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
return mapCharToCount;
}


  let coderArray= [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
function cb(letter){
  let letterCode = letter.charCodeAt(0);
  let tempIndex = coderArray.indexOf(letterCode);
  coderArray.splice(tempIndex,1);
  const rand = getRandomInt(0, coderArray.length-1);
  let codedLetter = coderArray[rand];
    coderArray.splice(rand,1);
    coderArray.splice(tempIndex,0,letterCode);
    return String.fromCharCode(codedLetter);
  }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}