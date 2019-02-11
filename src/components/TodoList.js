import React from "react";

const TodoList = ({ toggleTodo, deleteTodo, todos }) => {
  let dispTodos = todos.map(todo => {
    return (
      <li key={todo.id}>
        <span
          className={todo.completed ? "completed" : ""}
          onClick={() => {
            toggleTodo(todo.id);
          }}
        >
          {todo.body}
        </span>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{dispTodos}</ul>;
};

export default TodoList;
