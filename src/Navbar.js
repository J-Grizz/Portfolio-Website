import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom"

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    flexGrow: 1,
    zIndex: 10
  },
  // menuButton: {
  //   padding: theme.spacing(6),
  // },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: "rgba(255,255,255,.1)",
  },
  navButton: {
    cursor: "none",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.4)"

    }
  },
  link: {
    cursor: "none",
    color: "white",
    textDecoration: "none",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.navbar}
        position="static">
        <Toolbar>

          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}

          <Button
            className={classes.navButton}
            color="inherit"
            size="large"
          >
            <NavLink
              className={classes.link}
              to="/">
              <h4>
                James Gray
              </h4>
            </NavLink>
          </Button>


        </Toolbar>
      </AppBar>
    </div>
  );
}