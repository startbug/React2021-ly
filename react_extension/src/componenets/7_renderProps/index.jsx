import React, { Component } from "react";
import "./index.css";
import DDD from "../1_setState";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* 好处在于A组件内只需要通过props调用一个函数，而A内显示什么组件，完全由外部自由控制 */}
        <A shit={(name) => <DDD name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = {
    name: "啊啊啊",
  };
  render() {
    return (
      <div className="child">
        <h3>我是A组件</h3>
        {this.props.shit(this.state.name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="grand">
        <h3>我是B组件</h3>
        {this.props.name}
      </div>
    );
  }
}
