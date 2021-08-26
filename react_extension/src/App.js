import React, { Component, Fragment } from "react";
import Demo from "./componenets/8_ErrorBoundary/Parent";
export default class index extends Component {
  render() {
    return (
      <Fragment a="1">
        <Demo />
      </Fragment>
    );
  }
}
