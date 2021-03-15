import React from "react";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  return (
    <div onClick={props.toggle} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
