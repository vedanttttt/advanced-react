import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { act } from "react-dom/test-utils";
// reducer function
import { reducer } from "./reducer";
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "h",
};
const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");
      // console.log(people);
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const deleteItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => deleteItem(id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
