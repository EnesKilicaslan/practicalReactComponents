import React, { useState, useMemo } from "react";

export function CounterWithUseMemo() {
  const [counterFirst, setCounterFirst] = useState(0);
  const [counterSecond, setCounterSecond] = useState(0);

  const incrementFirst = () => {
    setCounterFirst(counterFirst + 1);
  };

  const IncrementSecond = () => {
    setCounterSecond(counterSecond + 1);
  };

  const isFirstEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;

    return counterFirst % 2 === 0 ? "Even" : "Odd";
  }, [counterFirst]);

  return (
    <div>
      <button onClick={incrementFirst}>Increment First - {counterFirst}</button>
      <span>{isFirstEven}</span>
      <br />
      <br />
      <button onClick={IncrementSecond}>
        Increment Second - {counterSecond}
      </button>
    </div>
  );
}

export default CounterWithUseMemo;
