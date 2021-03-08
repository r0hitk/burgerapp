import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let addedIngredients = Object.keys(props.allIngredients)
    .map((ingKey) => {
      return [...new Array(props.allIngredients[ingKey])].map((temp, i) => {
        return <BurgerIngredient type={ingKey} key={ingKey + i} />;
      });
    })
    .reduce((acc, val) => {
      return acc.concat(val);
    }, []);

  console.log(addedIngredients);

  if (addedIngredients.length === 0) {
    addedIngredients = <p>Please add some ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {addedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
