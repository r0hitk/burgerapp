import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerMenu from "../SideDrawer/HamburgerMenu/HamburgerMenu";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerMenu toggle={props.toggleMenu} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
