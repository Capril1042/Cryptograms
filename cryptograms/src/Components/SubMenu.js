import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import categorize from '../Utils/PuzzleDataCategories';
import puzzlesByCategory from '../Utils/SortedQuotes';



class SubMenu extends Component {
    constructor(props){
        super(props);
       this.state= {
           puzzles:[]
       }
    }

fetchData() {
  const quoteRef = db.collection('Quotes');
let query = quoteRef.where("category", "==", this.props.filter)
let newState = [];
  query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=>
     {
      newState.push({
        puzzles: doc.data(),
      });
    })
    this.setState({
      puzzles: newState,
    });

  });  
}

componentDidMount(){
    
this.fetchData();
}

componentDidUpdate(prevProps) {
 
  if (this.props.filter !== prevProps.filter) {
    this.fetchData();
  }
}
   
   render() {
       console.log(this.props.filter)
       console.log(this.state.puzzles)
       
       return(
        <div>
           <h1>{this.props.filter} Puzzles </h1> 

        </div>
       )
   }
}

export default SubMenu;