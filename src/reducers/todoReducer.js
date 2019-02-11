import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actionTypes";

let defaultState = {
  todos: [
    { id: 1, body: "buy milk", completed: false },
    { id: 2, body: "make cake", completed: false }
  ]
};

const todoReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let todos = [...state.todos];
  let newState = { todos: todos };
  let todoIndex;

  switch (action.type) {
    case ADD_TODO:
      let idGen = newState.todos[newState.todos.length - 1].id + 1;
      newState.todos.push({
        id: idGen,
        body: action.payload,
        completed: false
      });
      break;
    case TOGGLE_TODO:
      todoIndex = newState.todos.findIndex(todo => {
        return todo.id === action.payload;
      });

      if (todoIndex !== -1) {
        newState.todos[todoIndex].completed = !newState.todos[todoIndex]
          .completed;
      }
      break;
    case DELETE_TODO:
      todoIndex = newState.todos.findIndex(todo => {
        return todo.id === action.payload;
      });

      newState.todos = newState.todos
        .slice(0, todoIndex)
        .concat(newState.todos.slice(todoIndex + 1));
      break;
    default:
      break;
  }

  return newState;
};

export default todoReducer;
