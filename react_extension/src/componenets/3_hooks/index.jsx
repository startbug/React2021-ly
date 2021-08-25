import React, { Component } from "react";
import ReactDOM from "react-dom";

//类式组件
// export default class index extends Component {
//   state = { count: 0 };

//   myRef = React.createRef();

//   add = () => {
//     this.setState((state, props) => {
//       const { count } = state;
//       return {
//         count: count + 1,
//       };
//     });
//   };

//   show = () => {
//     console.log(this.myRef.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>求和为{this.state.count}</h2>
//         <button onClick={this.add}>点击+1</button>
//         <button onClick={this.show}>提示数据</button>
//       </div>
//     );
//   }
// }

//函数式组件
export default function Demo() {
  //useState方法,参数是值的初始化值,返回的是一个数组,有两个数据
  //第一个是保存的状态的值,第二个是修改值的方法
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("老王");

  /**
   * 第二个参数的数组，标识检测哪一个状态
   * 例如检测name状态，当name初始化或者发生变化的时候，就会回调第一个函数
   * 类似生命周期中的componentDidUpdate
   * 如果只写一个空数组，标识不检测任何状态，只有状态初始化的时候会调用一次，之后不在调用
   * 类似于生命周期中的componentDidMount
   */
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    //返回的这个函数，相当于生命周期中的componentWillUnmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  //创建Ref
  const myRef = React.useRef();

  function add() {
    // setCount(count + 1); //第一种写法
    setCount((count) => count + 1); //第一种写法
  }

  function changeName() {
    setName("aaaa");
  }

  function unmount() {
    //卸载组件
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
  }

  function show() {
    console.log(myRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>求和为:{count}</h2>
      <h2>我的名字:{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示数据</button>
    </div>
  );
}
