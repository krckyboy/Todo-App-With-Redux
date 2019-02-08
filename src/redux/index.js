import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { todos, goals, loading } from "./reducers";
import thunk from "redux-thunk";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const allReducers = combineReducers({
  todos,
  goals,
  loading
});

// Middleware stuff
const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.text.toLowerCase().indexOf("bitcoin") !== -1
  ) {
    return alert("Nope. That's a bad idea.");
  }
  if (
    action.type === ADD_GOAL &&
    action.goal.text.toLowerCase().indexOf("bitcoin") !== -1
  ) {
    return alert("Nope. That's a bad idea.");
  }
  return next(action);
};

// const thunk = store => next => action => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk, checker),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
