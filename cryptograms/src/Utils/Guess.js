
export default function guessLetter(quote,playersGuess, index, guess) {

let quoteArray= quote.toLowerCase().split("");
let playersGuessArray = playersGuess.toLowerCase().split("");

 let instances = [];
for(let i in quoteArray) {
    if (quoteArray[index] === quoteArray[i]){
        instances.push(i);
    }
}

for(let instance in instances) {
playersGuessArray.splice(instances[instance], 1, guess);

}

return playersGuessArray.join("");

}