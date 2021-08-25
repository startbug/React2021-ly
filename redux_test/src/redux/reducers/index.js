/**
 * 该文件用于汇总所有的reducer为一个总的reducers
 */

//引入为Count组件服务的reducer
import count from "./count";
//引入为Person组件服务的reducer
import persons from "./person";
//引入combineReducers，用于汇总多个Reducers
import { combineReducers } from "redux";

//汇总所有的reducer成为一个reducer
export default combineReducers({
  count,
  persons,
});
