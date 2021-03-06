import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchasable: false,
    ordering: false,
  };

  orderHandler = () => {
    this.setState({ ordering: true });
  };

  closeModal = () => {
    this.setState({ ordering: false });
  };

  continueBtn = () => {
    alert("Loading Payment's Page...");
  };

  updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingr) => {
        return ingredients[ingr];
      })
      .reduce((acc, current) => {
        return acc + current;
      }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchasableState(updatedIngredients);
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
    this.updatePurchasableState(updatedIngredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let ing in disabledInfo) {
      disabledInfo[ing] = disabledInfo[ing] <= 0;
    }
    return (
      <AuxComponent>
        <Modal closeModal={this.closeModal} show={this.state.ordering}>
          <OrderSummary
            clickCancel={this.closeModal}
            clickContinue={this.continueBtn}
            ingredients={this.state.ingredients}
            burgerPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger allIngredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientsHandler}
          removeIngredients={this.removeIngredientsHandler}
          disabledStatus={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.orderHandler}
        />
      </AuxComponent>
    );
  }
}

export default BurgerBuilder;
