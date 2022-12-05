import React, { useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  
  const { formState, onInputChange, onResetForm } = useForm(
    {
      username: '',
      email: '',
      password: ''
    }
  );

  const { username, email, password } = formState;

  

  useEffect( () => {
    // console.log("use effect called");
  }, [] )

  useEffect( () => {
    // console.log("formstate changed");
  }, [formState] )

  useEffect( () => {
    // console.log("email changed");
  }, [email] )

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="mail@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

        <input
        type="password"
        className="form-control mt-2"
        placeholder="contrasña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={onResetForm}
        >
        Borrar
      </button>

    </>

    

  );
};
