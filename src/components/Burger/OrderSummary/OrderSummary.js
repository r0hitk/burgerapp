import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const OrderedIngredients = Object.keys(props.ingredients).map((ingr) => {
    return (
      <li key={ingr}>
        <span style={{ textTransform: "capitalize" }}>{ingr}</span> : {props.ingredients[ingr]}
      </li>
    );
  });

  return (
    <div className={classes.OrderSummary}>
      <h3>Your Order:</h3>
      <p>A delicious Burger having:</p>
      <ul>{OrderedIngredients}</ul>
      <p>
        <strong>Total Price: {props.burgerPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.clickContinue}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.clickCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default OrderSummary;
