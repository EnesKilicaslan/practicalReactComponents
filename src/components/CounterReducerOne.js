import React, { useReducer } from "react";

const initialState = 0;

function counterReducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const CounterReducerOne = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => counterDispatch("increment")}>increment</button>
        <button onClick={() => counterDispatch("decrement")}>decrement</button>
        <button onClick={() => counterDispatch("reset")}>reset</button>
      </div>
    </div>
  );
};

export default CounterReducerOne;
