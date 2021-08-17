import React, { Component } from "react";
import Testt from "../../pages/Testt";

export default class Main extends Component {
  testBtn = () => {
    console.log("Main----------------------------", this);
  };

  render() {
    return (
      <div>
        <h1>This is Main</h1>
        <Testt></Testt>
        <button onClick={this.testBtn}>Main Btn</button>
      </div>
    );
  }
}
