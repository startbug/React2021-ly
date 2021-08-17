import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

/**
 * 借助this.props.history对象上的API对操作路由跳转、前进、后退
 *    this.props.thistory.push();
 *    this.props.thistory.replace();
 *    this.props.thistory.goBack();
 *    this.props.thistory.goForward();
 *    this.props.thistory.go();
 * 只有被应用到路由组件中的普通组件才会有路由中的特有对象(location,params和state)
 */
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  pushShow = () => {};

  replaceShow = (id, title) => {
    //手动通过history进行路由，replace方式，无历史记录
    return () => {
      //方式一：携带params参数
      // this.props.history.replace(`/home/message/detail/${title}/${id}`);

      //方式二：携带search参数
      // this.props.history.replace(
      //   `/home/message/detail?id=${id}&title=${title}`
      // );

      //方式三：携带state参数
      this.props.history.replace(`/home/message/detail`, { id, title });
    };
  };

  pushShow = (id, title) => {
    //手动通过history进行路由，push方式，有历史记录
    return () => {
      //方式一：携带params参数
      // this.props.history.push(`/home/message/detail/${title}/${id}`);

      //方式二：携带search参数
      // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

      //方式三：携带state参数
      this.props.history.push(`/home/message/detail`, { id, title });
    };
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((message) => {
            return (
              <li key={message.id}>
                {/* 方式一：向路由组件传递params参数 */}
                <Link
                  to={`/home/message/detail/${message.title}/${message.id}`}
                >
                  {message.title}
                </Link>
                <button onClick={this.pushShow(message.id, message.title)}>
                  push查看
                </button>
                <button onClick={this.replaceShow(message.id, message.title)}>
                  replace查看
                </button>

                {/* 方式二：向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link> */}

                {/* 方式三: 向路由组件传递state参数 */}
                {/* <Link
                  replace
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 方式一：声明接受params参数 */}
        {/* <Route path="/home/message/detail/:title/:id" component={Detail} /> */}

        {/* 方式二：search参数无需声明接受 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 方式二：state参数无需声明接受 */}
        <Route path="/home/message/detail" component={Detail} />

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>回退</button>
      </div>
    );
  }
}
