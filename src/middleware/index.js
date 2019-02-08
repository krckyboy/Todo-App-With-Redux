import checker from "./checker";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default applyMiddleware(thunk, checker);

// const thunk = store => next => action => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };
