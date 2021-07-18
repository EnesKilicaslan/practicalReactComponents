import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return [counter, increment, decrement, reset];
}

export default useCounter;
