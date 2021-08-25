import { ADD_PERSON } from "../constant";

//创建一个添加person的action
export const addPerson = (presonObj) => ({ type: ADD_PERSON, data: presonObj });
