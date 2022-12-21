import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./showIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementar = useCallback(
    ( value ) => {
        console.log(value)
    setCounter( (c) => c + value );
  },[])  
  

//   const incrementar = () => {
//     setCounter( counter + 1 )
//   }

  return (
    <>
      <h1>useCallBackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={ incrementar }/>

    </>
  );
};
