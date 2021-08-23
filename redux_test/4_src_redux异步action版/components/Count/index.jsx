import React, { Component } from "react";
//引入store,用于获取redux中保存的状态
import store from "../../redux/store";
import {
  createIncrementAsyncAction,
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_actoin";

export default class index extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  //加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value));
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value));
  };
  //奇数才加
  incrementIfOdd = () => {
    const count = store.getState();
    const { value } = this.selectNumber;
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value));
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    /*     setTimeout(() => { */
    //通过异步action调用
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
    /*     }, 500); */
  };
  render() {
    return (
      <div>
        <h2>当前求和为:{store.getState()}</h2>
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
