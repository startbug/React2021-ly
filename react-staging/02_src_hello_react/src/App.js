//创建并暴露 "外壳"组件App
import React, { Component } from "react";

//引入Hello.js
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
