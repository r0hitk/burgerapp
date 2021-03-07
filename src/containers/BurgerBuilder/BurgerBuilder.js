import React from "react";
import AuxComponent from "../../hoc/AuxComponent";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <AuxComponent>
        <div>Burger</div>
        <div>Burger Controls</div>
      </AuxComponent>
    );
  }
}

export default BurgerBuilder;
