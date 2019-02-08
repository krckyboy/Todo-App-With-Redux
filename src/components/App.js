import React, { Component } from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import Goals from "./Goals";
import { handleReceiveDataAction } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveDataAction());
  }

  render() {
    if (this.props.loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div className="App">
        <h1>Todo app with Redux</h1>
        <Todos />
        <Goals />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
