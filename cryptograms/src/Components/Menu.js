import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import SubMenu from './SubMenu';
import categorize from '../Utils/PuzzleDataCategories';
import puzzlesByCategory from '../Utils/SortedQuotes';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        }
    }

handleCategoryClick=(e)=>{
    e.preventDefault();
this.setState({
    filter: e.target.value,
   })
}



render () {

  
    return(
        <div> 
        Menu
        <button value="movie" onClick={this.handleCategoryClick}>Movies</button>
        <button value="music" onClick={this.handleCategoryClick}>Music</button>
        <SubMenu filter={this.state.filter}/>
         </div>
        
    )

}
}
export default Menu;