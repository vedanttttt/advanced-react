import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handleClick = (id) => {
    const arr = people.filter((person) => person.id != id);
    setPeople(arr);
  };
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => handleClick(person.id)}>Delete</button>
          </div>
        );
      })}
      <br />
      <button className="btn" onClick={() => setPeople([])}>
        Clear all items
      </button>
    </>
  );
};

export default UseStateArray;
