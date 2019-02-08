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

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
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

export function handleAddGoalAction(text, inputReset) {
  return dispatch => {
    return API.saveGoal(text)
      .then(goal => {
        dispatch(
          addGoalAction({
            ...goal
          })
        );
        inputReset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };
}

export function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
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

export function handleRemoveGoalAction(goal) {
  return dispatch => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      alert("Something went wrong!");
      dispatch(addGoalAction({ ...goal }));
    });
  };
}

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
