import { RECEIVE_DATA } from "./index";
import { API } from "../utils/fakeServer";

export function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

export function handleReceiveDataAction() {
  return dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receiveDataAction(todos, goals));
      }
    );
  };
}
