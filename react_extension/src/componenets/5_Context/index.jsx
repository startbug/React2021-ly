import React, { Component } from "react";
import "./index.css";

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = {
    username: "lucy",
    age: 18,
  };

  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名:{username}</h4>
        <Provider value={{ username: username, age: age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="child">
        <div>我是B组件</div>
        <h4>从A中得到名字:{this.context.username}</h4>
        <C />
      </div>
    );
  }
}

// class C extends Component {
//     //声明接收context
//     static contextType = MyContext;

//     render() {
//       return (
//         <div className="grand">
//           <div>我是C组件</div>
//           <h4>从A中得到名字:{this.context.username}</h4>
//         </div>
//       );
//     }
//   }

function C() {
  return (
    <div className="grand">
      <div>我是C组件</div>
      <Consumer>
        {/* value的值就是祖组件Provider中value属性传递的值 */}
        {(value) => {
          return (
            <h1>
              姓名:{value.username},年龄:{value.age}
            </h1>
          );
        }}
      </Consumer>
    </div>
  );
}
