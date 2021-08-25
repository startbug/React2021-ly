import React, { Component, Fragment } from "react";

//最外层只能由一个跟标签，这是jsx语法规定的，但是这样我们的代码就被嵌入了很多层级(没有要的层级)
//这时候可以使用Fragment来代替最外层的标签，骗过jsx语法校验，react在渲染的时候，会去掉Fragment标签
//或者通过写<>空标签也可以达到Fragment的效果
//但是空标签不允许有任何的属性值
//而Fragment可以有key属性，组件需要参与遍历，需要key值的时候，可以使用Fragment
export default class Demo extends Component {
  render() {
    return (
      //   <Fragment b="2">
      <>
        <input type="text" />
        <input type="text" />
      </>
      //   </Fragment>
    );
  }
}
