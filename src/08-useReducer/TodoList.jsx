import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todoList = []}) => {

  return (
    <>
      <ul className="list-group">
        {
            todoList.map(
                (item) => <TodoItem key={item.id} item={item}/>
            )
        }
      </ul>
    </>
  );
};
