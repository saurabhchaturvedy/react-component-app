import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary.js";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {

    state = {
        showSideDrawer: true
    };


    sideDrawerClosedHandler = () => {
           this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { return {showSideDrawer: !this.state.showSideDrawer}});
    }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
