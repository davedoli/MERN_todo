export const updateTodo = function (todo) {
  console.log("todocompleted in updateTodo");
  console.log(JSON.stringify(todo));
  return fetch(`/todos/${todo._id}`, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json', // Set to match the data format
      },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
};
