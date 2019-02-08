import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./index";
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

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function handleToggleTodoAction(id) {
  return dispatch => {
    dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id).catch(() => {
      alert("Something went wrong!");
      dispatch(toggleTodoAction(id));
    });
  };
}

export function handleAddTodoAction(text, inputReset) {
  return dispatch => {
    return API.saveTodo(text)
      .then(todo => {
        dispatch(
          addTodoAction({
            ...todo
          })
        );
        inputReset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
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
