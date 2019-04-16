import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import Rules from './Components/Rules';
import SubMenu from './Components/SubMenu';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import Puzzle from './Components/Puzzle';

const Routes = () => {
    return (
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/rules" component={Rules} />
        <Route path="/submenu" component={SubMenu}/>
        <Route path="/menu" component={Menu} /> 
        <Route path="/categories" component={Categories} />
        <Route path="/puzzle" component={Puzzle} /> 
        </Switch>
    );
};

export default Routes;