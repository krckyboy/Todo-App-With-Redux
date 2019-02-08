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

export default checker;
