import React, { Component } from "react";
import Count from "./containers/Count";
import store from "./redux/store";
import Person from "./containers/Person";
export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
        <hr />
        <Person />
      </div>
    );
  }
}
