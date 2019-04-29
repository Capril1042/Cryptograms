import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 className="Landing__Header">Welcome to Cryptograms!</h1>
        <div className="Landing__Link">
          <Link to="/menu" className="Landing__Button">
            Play Now
          </Link>{" "}
        </div>
        <div className="Landing__Link">
          <Link to="/rules" className="Landing__Button">
            How to Play
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
