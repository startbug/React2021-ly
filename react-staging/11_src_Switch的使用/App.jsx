import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Test from "./pages/Test";
import MyNavLink from "./components/MyNavLink";

/**
 * Switch的使用
 *  1.通常情况下,path和component是一一对应的关系
 *  2.Switch可以提高路由匹配效率(单一匹配,匹配到一个,不会再匹配下去)
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Test} />
                  <Route path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
