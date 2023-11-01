import React from "react";
import { useMutation } from "react-query";
import { updateTodo } from "../api/updateTodoRequests";
export const TodoAll = (props) => {
  const { mutate: toggleCompletion } = useMutation(() => {
    console.log({ ...props, todoCompleted: !props.item.todoCompleted })
    return updateTodo({ ...props, todoCompleted: !props.item.todoCompleted });
  });

  return (
    <div className="listContainer">
      <input
        checked={props.todoCompleted}
        type="checkbox"
        onChange={toggleCompletion}
      />
      <p>{props.item.todoDescription}</p>
      <p>{props.item.todoPriority}</p>
      <p>{props.item.todoCompleted.toString()}</p>
    </div>
  );
};
