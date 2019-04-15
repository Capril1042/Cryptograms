import getRandomInt from './RandomNumber'

export default function revealLetter(quote,playersGuess) {

let quoteArray= quote.toLowerCase().split("");
let playersGuessArray = playersGuess.toLowerCase().split("");

let validToReveal= [];

for(let index in quoteArray) {
    if(quoteArray[index] !== playersGuessArray[index]){
        validToReveal.push(index);
    }
}

 const rand = getRandomInt(0, validToReveal.length-1);
 const indexToReveal= validToReveal[rand]

 let instances = [];
for(let i in quoteArray) {
    if (quoteArray[indexToReveal] === quoteArray[i]){
        instances.push(i);
    }
}

for(let instance in instances) {
playersGuessArray.splice(instances[instance], 1, quoteArray[instances[instance]]);

}

return playersGuessArray.join("");

}