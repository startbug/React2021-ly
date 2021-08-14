import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("学生数据:");
        console.log(response.data);
      },
      (error) => {
        console.log("请求失败了！", error);
      }
    );
  };

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("汽车数据：");
        console.log(response.data);
      },
      (err) => {
        console.log("汽车信息获取失败", err);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    );
  }
}
