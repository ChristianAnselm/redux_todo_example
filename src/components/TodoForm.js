import React from "react";

const TodoForm = ({ bodyInput, handleChange, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input type="text" value={bodyInput} onChange={handleChange} />
      <button type="submit">Submit Todo</button>
    </form>
  );
};

export default TodoForm;
