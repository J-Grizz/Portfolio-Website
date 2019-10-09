import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom"
import useStyles from "./NavbarStyles"

Navbar.defaultProps = {
  navNames: ["home", "Projects", "CV"]
}

export default function Navbar(props) {
  const classes = useStyles();
  const { navNames } = props;

  const navs = navNames.map(
    nav =>
      <NavLink
        to={`/${nav}`}
        className={classes.link}
      >
        <Button
          className={classes.navButton}
          color="inherit"
          size="large"
        >
          <h4> {nav} </h4>
        </Button>
      </NavLink>
  )

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.navbar}
        position="static">
        <Toolbar>
          <NavLink
            className={classes.link}
            to="/">
            <Button
              className={classes.navButton}
              color="inherit"
              size="large"
            >
              <h3>
                James Gray
              </h3>
            </Button>
          </NavLink>
          {navs}
        </Toolbar>
      </AppBar>
    </div>
  );
}