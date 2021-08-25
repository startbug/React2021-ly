import React, { Component } from "react";
export default class index extends Component {
  //加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(parseInt(value));
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(parseInt(value));
  };
  //奇数才加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.props.increment(parseInt(value));
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.asyncIncrement(parseInt(value), 1000);
  };
  render() {
    return (
      <div>
        <h2>当前求和为:{this.props.count}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数才可以加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
