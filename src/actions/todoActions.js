import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

const addTodo = body => {
  return { type: ADD_TODO, payload: body };
};

const toggleTodo = id => {
  return { type: TOGGLE_TODO, payload: id };
};

const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};

export { addTodo, toggleTodo, deleteTodo };
