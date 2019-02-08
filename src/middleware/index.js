import checker from "./checker";
import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { todos } from "./todos";
import { goals } from "./goals";
import { loading } from "./loading";
import thunk from "redux-thunk";

export default applyMiddleware(thunk, checker);

// const thunk = store => next => action => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };
