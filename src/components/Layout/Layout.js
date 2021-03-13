import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <AuxComponent>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </AuxComponent>
  );
};

export default Layout;
