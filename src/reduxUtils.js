import { addTodo, toggleTodo, deleteTodo } from "./actions/todoActions";

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: body => {
      dispatch(addTodo(body));
    },
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export { mapStateToProps, mapDispatchToProps };
