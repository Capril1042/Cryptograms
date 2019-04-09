import React, { Component } from 'react';
import './Puzzle.css';
import Letter from './Letter';

class Puzzle extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ["t","h","i","s"," ", "i","s"," ","a"," ","q","u","o","t","e","."],
      encodedQuote:["e","n","p","x"," ", "p","x"," ","y"," ","u","f","l","e","a","."],
      solved: false,
      guesses:0,
      hintsRemaining:3,
      playersQuote:["_","_","_","_"," ", "_","_"," ","_"," ","_","_","_","_","_","."]
    }
  }
  render() {
    const game = this.state.encodedQuote;
    return (
      <div className="App">
       Crytogram
       <h1>{this.state.playersQuote}</h1>
       <div> {game.map((letter, i)=> <Letter key={i} letter={letter}/>)}
       </div>
      </div>
    );
  }
}

export default Puzzle;