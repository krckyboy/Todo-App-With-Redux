import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleAddTodoAction,
  handleRemoveTodoAction,
  handleToggleTodoAction
} from "../redux/actions";

class Todos extends Component {
  addItem = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const text = this.input.value;
    if (!text.trim()) {
      return this.resetInput();
    }
    dispatch(handleAddTodoAction(text, this.resetInput));
  };

  toggleTodo = id => {
    const { dispatch } = this.props;
    dispatch(handleToggleTodoAction(id));
  };

  removeTodo = (e, todo) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleRemoveTodoAction(todo));
  };

  resetInput = () => {
    this.input.focus();
    this.input.value = "";
  };

  render() {
    return (
      <div className="todos">
        <h2>Todos</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Add Todo"
            ref={input => (this.input = input)}
          />
          <button>Add Todo</button>
        </form>
        {!this.props.todos ? null : (
          <ol className="items">
            {this.props.todos.map(todo => (
              <li key={todo.id} className={todo.completed ? "completed" : null}>
                <span onClick={() => this.toggleTodo(todo.id)}>
                  {todo.text}
                </span>
                <button className="del" onClick={e => this.removeTodo(e, todo)}>
                  X
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

// Function that passes state from the store
// (piece of the store) as prop to a component
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

// We connect it with Redux
export default connect(mapStateToProps)(Todos);
