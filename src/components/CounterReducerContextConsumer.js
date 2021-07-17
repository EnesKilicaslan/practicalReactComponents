import React, { useContext } from "react";
import { CounterContext } from "./CounterReducerContextProvider";

export function CounterReducerContextConsumer() {
  //const [counterState, counterDispatch] = useContext(CounterContext);
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <h1>{counterContext.counterState}</h1>

      <div>
        <button
          onClick={() => {
            counterContext.counterDispatch("increment");
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            counterContext.counterDispatch("decrement");
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            counterContext.counterDispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterReducerContextConsumer;
