import React from "react";

export const TodoItem = ({item, onDeleteTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{item.description}</span>
      <button
        onClick={() => onDeleteTodo(item.id)}
        className="btn btn-danger">Borrar</button>
    </li>
  );
};
