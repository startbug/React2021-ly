import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

/**
 * 1.public/index.html  中引入样式时不写 ./ 写 / (常用)
 * 2.public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%  (常用)
 * 3.使用HashRouter
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/star/about">About</MyNavLink>
              <MyNavLink to="/star/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 注册路由 */}
                  <Route path="/star/about" component={About} />
                  <Route path="/star/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
