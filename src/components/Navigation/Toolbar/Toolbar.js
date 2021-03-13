import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <div>Menu</div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
