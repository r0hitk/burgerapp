import React from "react";
import AuxComponent from "../../hoc/AuxComponent";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleHamburgerMenu = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <AuxComponent>
        <Toolbar toggleMenu={this.toggleHamburgerMenu} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </AuxComponent>
    );
  }
}

export default Layout;
