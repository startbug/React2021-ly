import React, { Component } from "react";
import { withRouter } from "react-router";

/**
 * 1.当前的Header是一个普通组件，不同路由组件(因为是直接使用的，没有通过Route使用)
 * 2.通过withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
 * 3.withRouter的返回值是一个新组件
 */
class Header extends Component {
  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.back}>回退</button>
            <button onClick={this.forward}>回退</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
