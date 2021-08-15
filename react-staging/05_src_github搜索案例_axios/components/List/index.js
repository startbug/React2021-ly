import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class index extends Component {
  render() {
    const { userList, isFirst, isLoading, err } = this.props;
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
