import React from "react";
import ReactDOM from "react-dom";
import ModalItem from "./Modal";

const ModalPortal = ({ isOpen, toggleOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalItem toggleOpen={toggleOpen} />,
    document.body
  );
};

export default ModalPortal;
