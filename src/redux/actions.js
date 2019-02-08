import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA
} from "./index";

import { API } from "../utils/fakeServer";

// Action creators
export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}
export function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function handleRemoveTodoAction(todo) {
  return dispatch => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      alert("Something went wrong!");
      dispatch(
        addTodoAction({
          ...todo
        })
      );
    });
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}
export function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}
export function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

// We need one for receiving data (goals and todos at once)
