import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todoList = [], onDeleteTodo}) => {

  return (
    <>
      <ul className="list-group">
        {
            todoList.map(
                (item) => <TodoItem key={item.id} item={item} onDeleteTodo={onDeleteTodo}/>
            )
        }
      </ul>
    </>
  );
};
