import { ADD_GOAL, REMOVE_GOAL } from "./index";

import { API } from "../utils/fakeServer";

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
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

export function handleRemoveGoalAction(goal) {
  return dispatch => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      alert("Something went wrong!");
      dispatch(addGoalAction({ ...goal }));
    });
  };
}
