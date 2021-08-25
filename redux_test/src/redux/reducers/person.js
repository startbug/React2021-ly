import { ADD_PERSON } from "../constant";
const iniState = [{ id: "007", name: "lucy", age: 90 }];
export default function personReducer(preState = iniState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      //往数组中添加一个人，react底层会进行浅比较，比较地址值，直接操作数组，不会改变地址值，所以页面不会更新
      //   preState.unshift(data);
      //   return preState;
      //而通过展开运算符，可以生成一个新的数组，再添加data，地址已经改变，页面则能够刷新
      return [data, ...preState];
    default:
      return preState;
  }
}
