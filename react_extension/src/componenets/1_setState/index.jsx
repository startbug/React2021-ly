import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };

  add = () => {
    /**
     *   原因：调用setState确实马上修改了状态(同步)
     *   但是react调用render重新渲染数据是异步的，所以立刻打印，并不能拿到更新后的值
     *   可以通过setState第二个参数，一个回调函数的到更新后的值，原因是react会在render后调用该函数，所以能得到最新的值
     */
    //对象式的setState
    //1.获取原来的的count值
    const { count } = this.state;
    //2.更新状态
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count);
    });
    //上方修改后，打印count值,打印的数据并没有被修改
    // console.log(count);

    //函数式的setState，第二个参数是回调，和对象式的作用一样
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>数字：{this.state.count}</h1>
        <button onClick={this.add}>点我</button>
      </div>
    );
  }
}
