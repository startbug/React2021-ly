import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Main from "./components/Main";

export default class App extends Component {
  testBtn = () => {
    console.log("App-------------------", this);
  };

  render() {
    return (
      <div>
        <Link to="/test/ttt">xxxxxxxxxx</Link>
        <button onClick={this.testBtn}>App Btn</button>
        <Route path="/test/ttt" component={Main} />
      </div>
    );
  }
}
