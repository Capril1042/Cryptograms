import React, { Component } from 'react';

import './Menu.css';
import SubMenu from './SubMenu';


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
            <div className="CategoryTabs">
                <button value="movie" onClick={this.handleCategoryClick} className="Category">Movies</button>
                <button value="music" onClick={this.handleCategoryClick} className="Category">Music</button>
                <button value="tv" onClick={this.handleCategoryClick} className="Category">TV</button>
                <button value="books" onClick={this.handleCategoryClick} className="Category">Books</button>
                <button value="history" onClick={this.handleCategoryClick} className="Category">History</button>
            </div>
            <div className="SubMenu">
            <SubMenu filter={this.state.filter}/>
            </div>
         </div>  
        )
    }
}
export default Menu;