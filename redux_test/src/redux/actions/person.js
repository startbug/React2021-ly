import { ADD_PERSON } from "../constant";

//创建一个添加person的action
export const add = (presonObj) => ({ type: ADD_PERSON, data: presonObj });
