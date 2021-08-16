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
                <Link
                  to={`/home/message/detail/${message.title}/${message.id}`}
                >
                  {message.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail/:title/:id" component={Detail} />
      </div>
    );
  }
}
