export default function blankQuote(quote) {
   let quoteLC = quote.toLowerCase();
   let guessArray = [];

    for(let letter in quoteLC) {
        if (quoteLC.charCodeAt(letter) >= 97 && quoteLC.charCodeAt(letter) <= 122) {
            guessArray.push("_");
        } 
        else {
            guessArray.push(quoteLC[letter]);
        }
    }
        return guessArray.join("");
}
