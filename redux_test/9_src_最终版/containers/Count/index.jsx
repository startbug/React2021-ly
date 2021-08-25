import React, { Component } from "react";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

//引入action
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
class Count extends Component {
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
    this.props.incrementAsync(parseInt(value), 1000);
  };
  render() {
    return (
      <div>
        <h1>总人数：{this.props.personsNum}</h1>
        <h2>Count容器组件</h2>
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

//connect()返回一个函数,再次调用,传入CountUI组件
//使用connect()()创建并暴露一个Count容器组件
export default connect(
  (state) => ({ count: state.count, personsNum: state.persons.length }),
  //mapToDispatchToProps的一般写法
  /*   (dispatch) => ({
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    asyncIncrement: (data, time) =>
      dispatch(createIncrementAsyncAction(data, time)),
  }) */

  //mapDispatchToProps的简写
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
