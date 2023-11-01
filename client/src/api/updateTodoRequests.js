export const updateTodo = function (todo) {
    console.log('went to updateToDo')
    console.log(todo.item._id)
  return fetch(`/todos/${todo.item._id}`, {
    method: "PUT",
    body: JSON.stringify({
      todoDescription: todo.todoDescription,
      todoCompleted: todo.todoCompleted,
      todoPriority: todo.todoPriority,
    }),
  }).then((response) => response.json());
};
