import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      salami: 1,
      cheese: 1,
      meat: 1,
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
