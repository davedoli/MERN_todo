export const updateTodoRequests = function (todo) {
  return fetch(`/todos/${todo._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set to match the data format
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
};
