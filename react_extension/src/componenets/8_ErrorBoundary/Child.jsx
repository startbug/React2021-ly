import React, { Component } from "react";

export default class Child extends Component {
  state = {
    // users: [
    //   { id: "001", name: "tom", age: 18 },
    //   { id: "002", name: "lucy", age: 22 },
    //   { id: "003", name: "tony", age: 31 },
    // ],
    users: "xxx",
  };

  render() {
    return (
      <div>
        <h2>这里是Child组件</h2>
        {this.state.users.map((user) => {
          return (
            <h2 key={user.id}>
              name:{user.name}---age:{user.age}
            </h2>
          );
        })}
      </div>
    );
  }
}
