import React, { useState, useEffect, useRef } from "react";

export function CounterRefHook() {
  const [timer, setTimer] = useState(0);

  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      {timer}
      <button
        onClick={() => {
          clearInterval(interval.current);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CounterRefHook;
