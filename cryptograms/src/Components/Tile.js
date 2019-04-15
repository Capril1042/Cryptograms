import React, { Component } from 'react';
import './Tile.css';

 class Tile extends Component {
  render() {
    return (
      <div className="LetterTileContainer">
          <div className="LetterTile">
          <div className="TileTop">
          <input type="text" maxLength="1" placeholder={this.props.guess} index={this.props.index} onChange={this.props.handleGuess} />
          </div>
        <div className="TileBottom">
        {this.props.letter}
        </div>
        </div>
      </div>
      
    );
  }
}
export default Tile;