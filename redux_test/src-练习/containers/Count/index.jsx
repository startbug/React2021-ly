import React, { Component } from "react";
import { connect } from "react-redux";
import { createIncrementAction } from "../../redux/count_actoin";

class Count extends Component {
  addNum = () => {
    this.props.add(10);
  };

  render() {
    return (
      <div>
        <div>值为：{this.props.num}</div>
        <button onClick={this.addNum}>+</button>
      </div>
    );
  }
}

export default connect((state) => ({ num: state }), {
  add: createIncrementAction,
})(Count);
