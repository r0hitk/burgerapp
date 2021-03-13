import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <div>Menu</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
