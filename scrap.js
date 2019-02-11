let state = {
  todos: [
    { id: 1, body: "buy milk", completed: false },
    { id: 2, body: "make cake", completed: false }
  ],
  trash: []
};

let sampleAction = {
  type: "ADD_TODO",
  payload: "Buy eggs"
};
