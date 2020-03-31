import React from "react";
import { Component } from "react";
import "./index.css";

class LogoTitle extends Component {
  shouldComponentUpdate() {
    // console.log("LogoTitle -> SCP");
    return true;
  }
  render() {
    // console.log("LogoTitle -> RENDER!!!");
    return (
      <div className="logot-div">
        <h1 className="logot-logo">Logo</h1>
        <h1 className="logot-logo">Welcome to Binyamin's Shop</h1>
      </div>
    );
  }
}

export default LogoTitle;
