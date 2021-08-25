//引入Count的UI组件
import CountUI from "../../components/Count";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_actoin";

/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.返回对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
 * 3.mapStateToProps用于传递状态
 * 参数state是store维护的值
 */
function mapStateToProps(state) {
  return { count: state };
}

/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组件props的key,value就作为UI组件props的value
 * 3.mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    asyncIncrement: (data, time) =>
      dispatch(createIncrementAsyncAction(data, time)),
  };
}

//connect()返回一个函数,再次调用,传入CountUI组件
//使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
