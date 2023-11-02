import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateTodoRequests } from "../api/updateTodoRequests";
import { deleteTodoRequests } from "../api/deleteTodoRequests";

export const TodoAll = (props) => {
  const queryClient = useQueryClient();
  //mutate, which is referred to as updateTodo that trigggers the mutation when called
  //the mutate function gets an input from the onChange block, which can be passed to the mutationFunction.
  //the anon function in useMutation is the mutationFunction that sends data to server, and any other side effects

  const { mutate: updateTodo } = useMutation({
    mutationFn: (updatedTodo) => {
      return updateTodoRequests(updatedTodo);
    },
    onSettled: () => queryClient.invalidateQueries("todos"),
  });

  const {mutate : deleteTodo} = useMutation({
    mutationFn: (todo) => {
      return deleteTodoRequests(todo);
      }
  });
  return (
    <div className="listContainer">
      <input
        type="checkbox"
        checked={props.item.todoCompleted}
        onChange={() =>
          updateTodo({
            ...props.item,
            todoCompleted: !props.item.todoCompleted,
          })
        }
      />
      <input
        type="text"
        value={props.item.todoDescription}
        onChange={(e) => {
          console.log('target value')
          console.log(e.target.value);
          updateTodo({ ...props.item, todoDescription: e.target.value });
        }}
      />
      <button onClick={() => {deleteTodo(props.item)}}>Delete</button>
    </div>
  );
};
