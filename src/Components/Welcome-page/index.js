import React, { Component } from "react";
import "./index.css";
import "./animate.css";
import $ from "jquery";

class WelcomePage extends Component {
  shouldComponentUpdate() {
    // console.log("WelcomePAge -> SCP");
    return false;
  }

  moveToReact = () => {
    $(".welcome-sec-h1").addClass("rollOut");
    $(".welcome-first-h1").addClass("rollOut");
    $(".welcome-div").addClass("slideOutLeft");
    setTimeout(() => {
      window.location.href = "/shop";
    }, 2100);
  };

  componentDidMount() {
    setTimeout(() => {
      $(".welcome-sec-h1").css("animation-delay", "0s");
      $(".welcome-first-h1").css("animation-delay", "0.7s");
      $(".welcome-div").css("animation-delay", "1.3s");
    }, 2000);
  }
  render() {
    // console.log("WelcomePage -> RENDER!!!");
    return (
      <div className="welcome-div animated fadeIn">
        <h1 className="welcome-first-h1 animated bounceInDown">
          Welcome To My Shop
        </h1>

        <h1
          onClick={this.moveToReact}
          className="welcome-sec-h1 animated bounceInDown"
        >
          Getting Started
        </h1>
      </div>
    );
  }
}

export default WelcomePage;
