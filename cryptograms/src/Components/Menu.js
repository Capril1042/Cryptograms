import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div classnames="CategoryTabs">
                <button value="movie" onClick={this.handleCategoryClick} classname="Category">Movies</button>
                <button value="music" onClick={this.handleCategoryClick} classname="Category">Music</button>
                <button value="tv" onClick={this.handleCategoryClick} classname="Category">TV</button>
                <button value="books" onClick={this.handleCategoryClick} classname="Category">Books</button>
                <button value="history" onClick={this.handleCategoryClick} classname="Category">History</button>
            </div>
            <div className="SubMenu">
            <SubMenu filter={this.state.filter}/>
            </div>
         </div>  
        )
    }
}
export default Menu;