import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 20,
  cheese: 25,
  meat: 45,
  salami: 35,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      salami: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 30,
  };

  addIngredientsHandler = (type) => {
    const currentCount = this.state.ingredients[type];
    const updatedCount = currentCount + 1;

    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
  };

  removeIngredientsHandler = (type) => {
    const currentCount = this.state.ingredients[type];

    if (currentCount <= 0) {
      return;
    }
    const updatedCount = currentCount - 1;

    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let ing in disabledInfo) {
      disabledInfo[ing] = disabledInfo[ing] <= 0;
    }
    return (
      <AuxComponent>
        <Burger allIngredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientsHandler}
          removeIngredients={this.removeIngredientsHandler}
          disabledStatus={disabledInfo}
          price={this.state.totalPrice}
        />
      </AuxComponent>
    );
  }
}

export default BurgerBuilder;
