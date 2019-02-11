import React, { Component } from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "../reduxUtils";
import TodoForm from "../components/TodoForm";

class TodoFormContainer extends Component {
  state = {
    bodyInput: ""
  };

  handleChange = e => {
    this.setState({
      bodyInput: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.bodyInput);
    this.setState({
      bodyInput: ""
    });
  };

  render() {
    return (
      <TodoForm
        bodyInput={this.state.bodyInput}
        handleChange={this.handleChange}
        addTodo={this.addTodo}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormContainer);
