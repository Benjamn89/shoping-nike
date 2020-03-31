import React from "react";
import WelcomePage from "./Components/Welcome-page/index";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import myApp from "./Components/myApp/myApp";

const App = props => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/test" component={myApp} />
    </BrowserRouter>
  );
};

export default App;
