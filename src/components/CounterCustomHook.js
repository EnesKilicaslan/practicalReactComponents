import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export function CounterCustomHook() {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterCustomHook;
