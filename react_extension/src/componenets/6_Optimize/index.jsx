import React, { PureComponent } from "react";

/**
 * PureComponent修改了shouldComponentUpdate生命周期钩子
 * 当修改的值和原来的值一样的时候，则不会调用render方法重新渲染，优化逻辑
 */
export default class Parent extends PureComponent {
  changeLover = () => {
    this.setState({
      lover: "修改一下",
    });
  };

  state = {
    lover: "none",
  };

  /**
   * @param {下一个被修改的props值} nextProps
   * @param {下一个被修改的state值} nextState
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.lover === nextState.lover) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    console.log("Parent render...");
    const { lover } = this.state;
    return (
      <div className="parent">
        <h1>Parent组件</h1>
        <span>名字:{lover}</span>
        <br />
        <button onClick={this.changeLover}>换人</button>
        <Child lover="杨幂" />
      </div>
    );
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, this.state);
  //   console.log(nextProps, nextState);
  //   return this.props.lover !== nextProps.lover;
  // }

  render() {
    console.log("Child render...");
    return (
      <div className="child">
        <h1>Child组件</h1>
        <span>上一家:{this.props.lover} </span>
        <br />
      </div>
    );
  }
}
