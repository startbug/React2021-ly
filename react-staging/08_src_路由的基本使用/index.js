import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/**
 * 路由的基本使用
 *  1.明确好边界中的导航区、展示区
 *  2.导航区的a标签改为Link标签
 *      <Link to="/xxx"></Link>
 *  3.展示区写Route标签进行路径的匹配
 *      <Route path='/xxxx' component={Demo} />
 *  4.<App>的最外侧包裹了一个<BrowserRouter>或者<HashrRouter>
 */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
