import React, { Component } from "react";
import { connect } from "react-redux";
import { addGoalAction, removeGoalAction } from "../redux/actions"; // action
import { generateId } from "../utils/util";
import { API } from "../utils/fakeServer";

class Goals extends Component {
  addGoal = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const text = this.input.value;

    if (!text.trim()) {
      return;
    }

    return API.saveGoal(text)
      .then(goal => {
        dispatch(
          addGoalAction({
            ...goal
          })
        );
        this.resetInput();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  removeGoal = (e, goal) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      alert("Something went wrong!");
      dispatch(addGoalAction({ ...goal }));
    });
  };

  resetInput = () => {
    this.input.focus();
    this.input.value = "";
  };

  render() {
    return (
      <div>
        <h2>Goals</h2>
        <form onSubmit={this.addGoal}>
          <input
            type="text"
            placeholder="Add Goal"
            ref={input => (this.input = input)}
          />
          <button>Add Goal</button>
        </form>
        {!this.props.goals ? null : (
          <ol className="items">
            {this.props.goals.map(goal => (
              <li key={goal.id} className={goal.completed ? "completed" : null}>
                {goal.text}
                <button className="del" onClick={e => this.removeGoal(e, goal)}>
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

// Function that passes state from the store as prop to a component
function mapStateToProps(state) {
  return {
    goals: state.goals
  };
}

// We connect it
export default connect(mapStateToProps)(Goals);
