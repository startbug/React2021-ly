import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./index.css";

export default class index extends Component {
  //对接受得props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    //解构赋值获取keyCode和target
    const { keyCode, target } = event;
    //判断是否是回车案件
    if (keyCode !== 13) return;
    const name = target.value.trim();
    if (name === "") {
      alert("输入不能为空");
      return;
    }
    //nanoid库，生成唯一id的工具库
    const id = nanoid();
    //准备一个todo对象
    console.log(id);
    const todoObj = { id: id, name: target.value, done: false };
    //将todoObj通过回调函数传递给父组件App
    this.props.addTodo(todoObj);
    //清空输入
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
