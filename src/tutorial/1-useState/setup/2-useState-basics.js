import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState("hello"));
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") setText("Hey buddy");
    else setText("random title");
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
