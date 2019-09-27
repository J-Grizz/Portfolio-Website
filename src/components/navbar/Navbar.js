import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom"
import useStyles from "./NavbarStyles"


export default function ButtonAppBar() {
  const classes = useStyles();

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
        </Toolbar>
      </AppBar>
    </div>
  );
}