import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      salami: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <AuxComponent>
        <Burger allIngredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </AuxComponent>
    );
  }
}

export default BurgerBuilder;
