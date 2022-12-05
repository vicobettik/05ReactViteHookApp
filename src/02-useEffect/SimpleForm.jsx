import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "vico",
    email: "vicuo@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

        {
            username === 'vico' && <Message/>
        }

    </>

    

  );
};
