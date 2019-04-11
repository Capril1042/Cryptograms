import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import Puzzle from './Components/Puzzle';

const Routes = () => {
    return (
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/menu" component={Menu} /> 
        <Route path="/categories" component={Categories} />
        <Route path="/puzzle" component={Puzzle} /> 
        </Switch>
    );
};

export default Routes;