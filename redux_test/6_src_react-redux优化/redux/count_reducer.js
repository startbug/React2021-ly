/**
 * 1.该文件用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
 * 2.reducer函数会接到两个参数,分别为:之前的状态(preState),动作对象(action)
 *
 * 求和案例:
 *  新增文件
 *    1.count_actoin.js用于创建action对象
 *    2.constant.js放置由于编码疏忽错写action中的type
 */
import { INCREMENT, DECREMENT } from "./constant";
const initState = 0;
export default function countReducer(preState = initState, action) {
  //从action对象中获取type和data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + parseInt(data);
    case DECREMENT:
      return preState - parseInt(data);
    default:
      return initState;
  }
}
