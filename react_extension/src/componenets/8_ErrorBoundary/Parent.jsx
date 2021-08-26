import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: "", //用于标识子组件是否产生错误
  };

  //当Parent的子组件出现报错时，会触发getDerivedStateFromError调用，并携带错误信息
  //当打开项目的时候，能正常看到错误信息的提示，过一会又不行了，是因为开发环境下不允许有错误边界，只有生产环境才允许，需要build一下，在运行即可
  //只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: error,
    };
  }

  componentDidCatch() {
    //可用于统计页面出错次数，反馈给后台
    console.log("页面出错时候，回调用这个方法，生命狗子中的一个方法");
  }

  render() {
    return (
      <div>
        <h2>这里是Parent组件</h2>
        {this.state.hasError ? <h2>当前网络不佳，稍后再试</h2> : <Child />}
      </div>
    );
  }
}
