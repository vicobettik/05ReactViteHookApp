import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30
        }
    );
    const {counter1, counter2, counter3} = state;

  return (
    <div>
      <h1>Counter:{ counter1 }</h1>
      <h1>Counter:{ counter2 }</h1>
      <h1>Counter:{ counter3 }</h1>

      <hr />

      <button onClick={ 
            () => setCounter(
                {
                    ...state,
                    counter1: counter1 + 1
                }
            )
         }
            className="btn btn-primary">
        +1
      </button>
    </div>
  )
}

