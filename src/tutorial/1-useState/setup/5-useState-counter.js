import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrement
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
