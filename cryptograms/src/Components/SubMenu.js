import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SubMenu.css';
import db from '../firebase';




class SubMenu extends Component {
    constructor(props) {
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
     const puzzles = this.state.puzzles;
     let display = puzzles.length === 0 ? <p>click a category to display puzzles </p> : <div></div>
       return(
        <div>
           <h1>{this.props.filter} Puzzles </h1> 
            {display}
        <div className="SubMenuGrid">
          {puzzles.map((puzzle,i) =>
          <Link className="SubMenuLink"
            to={{ pathname: "/puzzle",
            state: {
              puzzle: this.state.puzzles[i]
              }
            }}
          >
            <li key={i} className="SubMenuGridItem">{i+1} </li>  </Link>
          )}
        </div>
        </div>
       )
   }
}

export default SubMenu;