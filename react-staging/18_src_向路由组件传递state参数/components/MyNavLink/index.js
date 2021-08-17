import React, { Component } from "react";
import { NavLink } from "react-router-dom";

/**
 * 1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
 * 2.标签体内容是一个特殊的标签属性(名为children)
 * 3.通过this.props.children可以获取标签体内容
 */
export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="star"
        className="list-group-item"
        {...this.props}
      ></NavLink>
    );
  }
}
