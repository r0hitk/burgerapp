import React from "react";
import AuxComponent from "../../../hoc/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

componentDidUpdate(){
  console.log("check if ");
}

  render() {
    return (
      <AuxComponent>
        <Backdrop quitBackdrop={this.props.closeModal} show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </AuxComponent>
    );
  }
}

export default Modal;
