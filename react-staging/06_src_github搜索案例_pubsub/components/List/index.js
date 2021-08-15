import React, { Component } from "react";
import Item from "../Item";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    userList: [], //userList初始化为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储错误信息
  };

  componentDidMount() {
    //渲染后，开始订阅star(名字任意)消息
    this.token = PubSub.subscribe("star", (_, data) => {
      this.setState(data);
    });
  }

  //当组件要卸载的时候，取消订阅token
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { userList, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst
          ? "欢迎使用这个垃圾网站"
          : isLoading
          ? "正在加载中"
          : err
          ? ("出错了啊", err)
          : userList.map((user) => {
              const stateAndUser = { user, ...this.props };
              return <Item key={user.id} {...stateAndUser} />;
            })}
      </div>
    );
  }
}
