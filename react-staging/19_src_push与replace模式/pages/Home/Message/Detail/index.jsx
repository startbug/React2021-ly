import React, { Component } from "react";
import { Route } from "react-router-dom";
import qs from "querystring";

var ContentData = [
  { id: "01", content: "你好，8岁" },
  { id: "02", content: "你好，22岁" },
  { id: "03", content: "你好，33岁" },
];

// var json = { id: 1, name: "ssss", age: 18 };
//json转urlencoded
// console.log(qs.stringify(json));
//urlencoded转json
// var urlencoded = "id=1&name=ssss&age=18";
// console.log(qs.parse(urlencoded));

export default class index extends Component {
  render() {
    console.log(this.props);
    // 方式一: 接收params参数
    // const { id, title } = this.props.match.params;

    // 方式二: 接收search参数
    // const searchParam = this.props.location.search;
    // const message = qs.parse(searchParam.slice(1)); //接收到的是urlencoded格式的参数
    // const { id, title } = message;

    //方式三: 接受state参数
    const { id, title } = this.props.location.state || {};

    const contentObj =
      ContentData.find((contentObj) => {
        return contentObj.id === id;
      }) || {};
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{contentObj.content}</li>
      </ul>
    );
  }
}
