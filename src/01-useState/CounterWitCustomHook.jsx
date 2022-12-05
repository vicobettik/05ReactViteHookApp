import React from "react";
import { useCounter } from "../Hooks/useCounter";

export const CounterWitCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter con hook:{ counter }</h1>

      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
      <button className="btn btn-primary" onClick={reset}>reset</button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  );
};
