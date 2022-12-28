import React from "react";
import "./Modal.css";

const ModalItem = ({ toggleOpen }) => {
  return (
    <div className="modal">
      <div className="content-model">
        <button onClick={toggleOpen}>Close</button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti
        illo odit dicta doloremque dolorum consectetur quo beatae dolores, ipsa
        veniam unde autem repellat temporibus corporis labore deserunt culpa
        omnis?
      </div>
    </div>
  );
};

export default ModalItem;
