import {ADD_TODO_ITEM,DEL_TODO_ITEM} from './actiontypes';
// import * as types from './actiontypes';
// 用的时候types.什么什么
export const add_todo = (value) => ({type:ADD_TODO_ITEM,value:value});
export const del_todo = (index) => ({type:DEL_TODO_ITEM,index:index});