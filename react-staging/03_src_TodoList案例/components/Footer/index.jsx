import React, { Component } from "react";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    checkAll: PropTypes.func.isRequired,
  };

  //处理全选框
  handleCheckAll = (checkAll) => {
    return (event) => checkAll(event.target.checked);
  };

  //清理所有已经完成的todo
  clearAll = (clearAllTodo) => {
    return () => {
      if (window.confirm("确定要全部删除吗?")) {
        clearAllTodo();
      }
    };
  };

  render() {
    const { todoList, checkAll, clearAllTodo } = this.props;
    //已完成数量
    const doneNum = todoList.reduce(
      (preValue, todo) => preValue + (todo.done ? 1 : 0),
      0
    );
    //总数
    const totalCount = todoList.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneNum === totalCount && totalCount !== 0 ? true : false}
            onChange={this.handleCheckAll(checkAll)}
          />
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{totalCount}
        </span>
        <button
          className="btn btn-danger"
          onClick={this.clearAll(clearAllTodo)}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
