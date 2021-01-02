import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  console.log(useParams());
  const { id } = useParams();
  const person = data.find((person) => person.id === parseInt(id));
  console.log(person);
  return (
    <div>
      <h1>{person.name}</h1>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
