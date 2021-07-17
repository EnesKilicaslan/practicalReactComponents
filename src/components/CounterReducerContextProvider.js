import React, { useReducer } from "react";
import { CounterReducerContextConsumer } from "./CounterReducerContextConsumer";

const initialState = 0;

const reducer = (state, action) => {
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
};

export const CounterContext = React.createContext();

export function CounterReducerContextProvider() {
  const [counterState, counterDispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterContext.Provider
        value={{
          counterState,
          counterDispatch,
        }}
      >
        <CounterReducerContextConsumer />
      </CounterContext.Provider>
    </div>
  );
}

export default CounterReducerContextProvider;
