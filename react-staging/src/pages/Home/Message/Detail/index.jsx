import React, { Component } from "react";
import { Route } from "react-router-dom";

var ContentData = [
  { id: "01", content: "你好，8岁" },
  { id: "02", content: "你好，22岁" },
  { id: "03", content: "你好，33岁" },
];

export default class index extends Component {
  render() {
    const message = this.props.match.params;
    const contentObj = ContentData.find((contentObj) => {
      return contentObj.id === message.id;
    });
    return (
      <ul>
        <li>ID:{message.id}</li>
        <li>TITLE:{message.title}</li>
        <li>CONTENT:{contentObj.content}</li>
      </ul>
    );
  }
}
