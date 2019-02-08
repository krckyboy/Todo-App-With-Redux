import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { todos } from "./todos";
import { goals } from "./goals";
import { loading } from "./loading";
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

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk, checker),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
