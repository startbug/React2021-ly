import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

/**
 * 1.默认使用的是模糊匹配(简要概述：输入的路径必须包含的路径，按照/切割，一个个按顺序匹配，顺序不对，也不能匹配)
 * 2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
 * 3.严格匹配不要随便开启，需要再开，有时候开启会导致无法继续匹配二级路由
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
                  <Route exact={true} path="/home" component={Home} />
                  {/* d当前面的路由都没有匹配的时候，由Redirect进行兜底，跳转到指定的路径 */}
                  <Redirect to="about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
