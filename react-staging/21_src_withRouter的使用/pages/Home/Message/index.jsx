import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

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

      </div>
    );
  }
}
