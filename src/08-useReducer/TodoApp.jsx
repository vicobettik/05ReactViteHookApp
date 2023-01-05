import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del alma",
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  return (
    <>
      <h1>Todo App: 10, <small>pendientes: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Todo list */}
          <TodoList todoList={todos} onDeleteTodo={handleDeleteTodo}/>
          {/* fin Todo list */}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Todoadd onNewTodo(todo)*/}
          {/* id, desc, done */}
          <TodoAdd onNewTodo={handleNewTodo}/>
          {/* fin Todo list */}
        </div>

      </div>
    </>
  );
};
