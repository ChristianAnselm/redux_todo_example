import React, { Component } from "react";
import "./App.css";
import TodoListContainer from "./containers/todoListContainer";
import TodoFormContainer from "./containers/todoFormContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
        <TodoFormContainer />
      </div>
    );
  }
}

export default App;
