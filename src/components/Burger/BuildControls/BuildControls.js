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
      {controls.map((ctrl) => {
       return  <BuildControl label={ctrl.label} key={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
