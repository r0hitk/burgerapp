import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Salami", type: "salami" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div>
        <p className={classes.Price}>
          Current Price = {"₹" + props.price.toFixed(2)}
        </p>
        <p
          style={{
            textAlign: "right",
            fontSize: "small",
          }}
        >
          (*including Buns=₹30)
        </p>
      </div>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            more={() => props.addIngredients(ctrl.type)}
            less={() => props.removeIngredients(ctrl.type)}
            disabled={props.disabledStatus[ctrl.type]}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
