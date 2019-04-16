// Will fetch quotes from the database 

import React, { Component } from 'react';
import db from '../firebase';

class PuzzleData extends Component {
    constructor(props) {
        super(props);
        this.state ={
            puzzles:[]
        }
    }
componentDidMount(){
const quoteRef = db.collection('Quotes');
let newState = [];
  quoteRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=>
     {
      newState.push({
        puzzles: doc.data(),
      });
    })
    this.setState({
      puzzles: newState
    });

  });
}

render () {
    console.log(this.state.puzzles)
    return(
        <div> Puzzles </div>
    )
}
}
export default PuzzleData;