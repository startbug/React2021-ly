import React, { Component ,Fragment} from "react";
import Demo from "./componenets/4_Fragment";
export default class index extends Component {
  render() {
    return (
      <Fragment a="1">
        <Demo />
      </Fragment>
    );
  }
}
