import React from "react";
import AuxComponent from "../../../hoc/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <AuxComponent>
      <Backdrop quitBackdrop={props.closeModal} show={props.show} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </AuxComponent>
  );
};

export default Modal;
