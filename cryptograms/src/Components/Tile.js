import React, { Component } from 'react';
import './Tile.css';

 class Tile extends Component {
  render() {
    const tile = this.props.letter !== " " ? 
      <div className="LetterTile">
          <div className="TileTop">
          <input type="text" maxLength="1" placeholder={ this.props.guess } index={this.props.index} onChange={this.props.handleGuess}>
          </input> 
          </div>
        <div className="TileBottom">
        {this.props.letter}
        </div>
        </div> :
    " ";
    return (
      <div className="LetterTileContainer">
       {tile}
      </div>
      
    );
  }
}
export default Tile;