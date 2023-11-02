import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateTodo } from "../api/updateTodoRequests";


export const TodoAll = (props) => {

  const queryClient = useQueryClient()

  const { mutate: toggleCompletion } = useMutation(() => {
    return updateTodo({ ...props.item, todoCompleted: !props.item.todoCompleted });
  }, {
    onSettled: () => {
      queryClient.invalidateQueries('todos')
    }
  });

  return (
    <div className="listContainer">
      <input
        checked={props.item.todoCompleted}
        type="checkbox"
        onChange={toggleCompletion}
      />
      <p>{props.item.todoDescription}</p>
      <p>{props.item.todoPriority}</p>
      <p>{props.item.todoCompleted.toString()}</p>
    </div>
  );
};
