import React, { useState, useEffect } from "react";

function HookCounterExample() {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    //setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("hook componentn mount");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("hook component unmount");
      clearInterval(interval);
    };
  }, []);
  // don't think dependency array is a way that specifies when the effect sould run, instead
  // dependency array should everything that react must watch for changes
  //

  return <div style={{ color: "red" }}>{counter}</div>;
}

export default HookCounterExample;
