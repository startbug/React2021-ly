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

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((message) => {
            return (
              <li key={message.id}>
                {/* 方式一：向路由组件传递params参数 */}
                {/* <Link
                  to={`/home/message/detail/${message.title}/${message.id}`}
                >
                  {message.title}
                </Link> */}

                {/* 方式二：向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link> */}

                {/* 方式三: 向路由组件传递state参数 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </Link>
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
