import React, { Component } from 'react';
import './Puzzle.css';
import Tile from './Tile';

import encodedQuote from '../Utils/EncodedQuote';
import blankQuote from '../Utils/BlankQuote';

class Puzzle extends Component {
  constructor(props){
    super(props);
    this.state = {
      solved: false,
      guesses:0,
      hintsRemaining:3,
      quote : "",
      puzzle: "",
      playersGuess: "",
    }
  }

  checkPuzzle=()=>{
    if(this.state.quote === this.state.playersGuess){
      this.setState({solved: true})
    }
  }

  componentDidMount(){
     const quote= this.props.location.state.puzzle.puzzles.Quote;
     const game = encodedQuote(quote);
     let playersGuess=  blankQuote(quote);
    this.setState({
      quote: quote,
      puzzle:game,
      playersGuess: playersGuess
    })
  }

  render() {
    console.log(this.state.quote);
    console.log(this.state.puzzle);
    console.log(this.state.playersGuess);
    console.log(this.state.solved);
    
    
    return (
      <div className="GameDisplay">
        <h1>Crytograms</h1>
       <div className="GameContainer">
       <div className="GameControlMenu"> <button className="GameControls">hints</button> 
       <button className="GameControls" onClick={this.checkPuzzle}>check</button></div>
       {/* <h1>{this.state.playersQuote}</h1> */}
       <div className="Game"> {this.state.puzzle.split("").map((letter, i)=> <Tile key={i} letter={letter}/>)}
       </div>
      </div>
      </div>
      
    );
  }
}

export default Puzzle;