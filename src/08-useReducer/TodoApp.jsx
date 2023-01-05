import React from "react";
import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  }

  return (
    <>
      <h1>Todo App: 10, <small>pendientes: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Todo list */}
          <TodoList todoList={todos}/>
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
