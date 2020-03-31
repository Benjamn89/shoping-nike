import React, { Component } from "react";
import "./Collection.css";
import Items from "./Items/index";

class Collection extends Component {
  shouldComponentUpdate() {
    // console.log("Collection -> SCP");
    return true;
  }
  render() {
    // console.log("Collection -> RENDER!!!");
    return (
      <div className="collection-wrapper-div">
        <Items />
        <hr className="hr-closing-sec" />
        <h1 className="powered">Powererd By Binyamin Tal</h1>
      </div>
    );
  }
}

export default Collection;
