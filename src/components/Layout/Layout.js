import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <AuxComponent>
      <div>Toolbar,Side Drawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </AuxComponent>
  );
};

export default Layout;
