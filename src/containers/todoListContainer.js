import React, { Component } from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "../reduxUtils";
import TodoList from "../components/TodoList";

class TodoListContainer extends Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <TodoList
        toggleTodo={this.toggleTodo}
        deleteTodo={this.deleteTodo}
        todos={this.props.todos}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
