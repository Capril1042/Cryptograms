import React, { Component } from "react";
import "./Puzzle.css";
import Tile from "./Tile";

import encodedQuote from "../Utils/EncodedQuote";
import blankQuote from "../Utils/BlankQuote";
import revealLetter from "../Utils/Hints";
import guessLetter from "../Utils/Guess";

class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solved: false,
      hintsRemaining: 3,
      quote: "",
      puzzle: "",
      playersGuess: ""
    };
  }

  handleGuess = e => {
    const indexInt = Number(e.target.getAttribute("index"));
    let newGuess = guessLetter(
      this.state.quote,
      this.state.playersGuess,
      indexInt,
      e.target.value
    );
    this.setState({ playersGuess: newGuess });
  };

  checkPuzzle = () => {
    if (
      this.state.quote.toLowerCase() === this.state.playersGuess.toLowerCase()
    ) {
      this.setState({ solved: true });
    }
    console.log(this.state.solved);
  };

  giveHint = () => {
    alert(`You have ${this.state.hintsRemaining} hint(s) remaining`);
    if (this.state.hintsRemaining > 0) {
      let newPlayersGuess = revealLetter(
        this.state.quote,
        this.state.playersGuess
      );
      this.setState({
        playersGuess: newPlayersGuess,
        hintsRemaining: this.state.hintsRemaining - 1
      });
    }
  };

  componentDidMount() {
    const quote = this.props.location.state.puzzle.puzzles.Quote;
    const game = encodedQuote(quote);
    let playersGuess = blankQuote(quote);
    this.setState({
      quote: quote,
      puzzle: game,
      playersGuess: playersGuess
    });
  }

  render() {
    console.log(this.state.quote);
    console.log(this.state.puzzle);
    console.log(this.state.playersGuess);
    console.log(this.state.solved);
    console.log(this.state.hintsRemaining);

    const puzzle = this.state.puzzle;
    const guessPuzzle = this.state.playersGuess;
    return (
      <div className="GameDisplay">
        <h1>Crytograms</h1>
        <div className="GameContainer">
          <div className="GameControlMenu">
            {" "}
            <button className="GameControls" onClick={this.giveHint}>
              hints
            </button>
            <button className="GameControls" onClick={this.checkPuzzle}>
              check
            </button>
          </div>
          <div className="Game">
            {" "}
            {puzzle.split("").map((letter, i) => (
              <Tile
                key={i}
                index={i}
                letter={letter}
                guess={guessPuzzle[i]}
                handleGuess={this.handleGuess}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Puzzle;
