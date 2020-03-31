import React from "react";
import { Component } from "react";
import LogoTitle from "./Logo-title/index";
import Collection from "./Collection/Collection";

class myApp extends Component {
  shouldComponentUpdate() {
    // console.log("myApp -> SCP");
    return true;
  }
  render() {
    // console.log("myApp -> RENDER!!!");
    return (
      <div>
        <LogoTitle />
        <Collection />
      </div>
    );
  }
}

export default myApp;
