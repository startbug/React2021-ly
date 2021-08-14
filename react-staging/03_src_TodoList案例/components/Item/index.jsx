import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  state = {
    mouse: false,
  };

  //处理鼠标移入移出选项的高亮状态的函数
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  //处理复选框状态的函数
  handleCheck = (id, updateTodo) => {
    return (event) => {
      updateTodo(id, event.target.checked);
    };
  };

  //处理删除todo的函数
  handleDelete = (id, deleteTodo) => {
    if (window.confirm("是否确定删除？")) {
      deleteTodo(id);
    }
  };

  render() {
    const { id, name, done, updateTodo, deleteTodo } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id, updateTodo)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id, deleteTodo);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
