import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "0001", name: "游戏", done: true },
      { id: "0002", name: "吃饭", done: false },
      { id: "0003", name: "敲代码", done: true },
    ],
  };

  //添加todo的回调
  addTodo = (data) => {
    this.setState({
      todoList: [data, ...this.state.todoList],
    });
  };

  //修改todo的勾选状态的回调
  updateTodo = (id, done) => {
    const newTodoList = this.state.todoList.map((todo) => {
      //如果id匹配，则修改done的值，再返回
      if (todo.id === id) return { ...todo, done };
      //不匹配，则直接返回
      else return todo;
    });

    this.setState({
      todoList: newTodoList,
    });
  };

  //删除todo的回调函数
  deleteTodo = (id) => {
    const newTodoList = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todoList: newTodoList,
    });
  };

  //全选框回调
  checkAll = (flag) => {
    console.log(flag);
    const newTodoList = this.state.todoList.map((todo) => {
      return { ...todo, done: flag };
    });
    console.log(newTodoList);
    this.setState({
      todoList: newTodoList,
    });
  };

  clearAllTodo = () => {
    const newTodoList = this.state.todoList.filter((todo) => {
      return !todo.done;
    });
    this.setState({
      todoList: newTodoList,
    });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todoList={todoList}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todoList={todoList}
              checkAll={this.checkAll}
              clearAllTodo={this.clearAllTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}
