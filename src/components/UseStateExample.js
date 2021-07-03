import React, { useState } from "react";

function UseStateExample() {
  const [counter, setCounter] = useState(0);
  const [counters, setCounters] = useState([]);

  const increment1 = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const increment3 = () => {
    for (let i = 0; i < 3; i++) {
      increment1();
    }
  };

  const add1 = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      Math.floor(Math.random() * 10),
    ]);
  };

  const add3 = () => {
    for (let i = 0; i < 3; i++) {
      add1();
    }
  };

  return (
    <div style={{ margin: "100px" }}>
      <h2> {counter}</h2>
      <button type="button" onClick={increment1}>
        Click for 1
      </button>
      <button type="button" onClick={increment3}>
        Click for 3
      </button>

      <div style={{ backgroundColor: "#DDDDDD", height: "600px" }}>
        <button type="button" onClick={add1}>
          Click for 1
        </button>
        <button type="button" onClick={add3}>
          Click for 3
        </button>

        <ul>
          {counters.map((c) => (
            <li> {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseStateExample;
