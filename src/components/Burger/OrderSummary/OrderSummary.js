import AuxComponent from "../../../hoc/AuxComponent";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const OrderedIngredients = Object.keys(props.ingredients).map((ingr) => {
    return (
      <li key={ingr}>
        <span style={{ textTransform: "capitalize" }}>{ingr}</span>:
        {props.ingredients[ingr]}
      </li>
    );
  });

  return (
    <AuxComponent>
      <h3>Your Order:</h3>
      <p>A delicious Burger having:</p>
      <ul>{OrderedIngredients}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.clickContinue}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.clickCancel}>
        Cancel
      </Button>
    </AuxComponent>
  );
};

export default OrderSummary;
