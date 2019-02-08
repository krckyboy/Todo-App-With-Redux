import { RECEIVE_DATA } from "./index";

export function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
