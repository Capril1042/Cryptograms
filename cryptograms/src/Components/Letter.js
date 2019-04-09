import React, { Component } from 'react';
import './Letter.css';

 class Letter extends Component {
  render() {
    return (
      
      <div className="LetterTile">
      {this.props.letter}
    </div>
      
    );
  }
}
export default Letter;