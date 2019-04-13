import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Landing.css';

class Landing extends Component {
   render() {
       return(
        <div className="LandingPage">
           <h1 className="LandingHeader">Welcome to Cryptograms!</h1> 
           <div className="LandingLink"><Link to="/menu" className="LandingButton">Play Now</Link> </div>
           <div className="LandingLink"><Link to="/rules" className="LandingButton">How to Play</Link></div>
        </div>
       )
   }
}

export default Landing;