import React, { Component } from "react";

export default class News extends Component {
  //进入News组件后，两秒后自动跳转到Detail中
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push(`/home/message/detail`, {
        id: "01",
        title: "啥玩意啊",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
      </div>
    );
  }
}
