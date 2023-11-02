export const deleteTodoRequests = function (todo) {
  return fetch(`/todos/${todo._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // Set to match the data format
    },
  });
};
