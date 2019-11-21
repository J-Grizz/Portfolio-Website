import React from "react";
import { NavLink } from "react-router-dom"
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./NavbarStyles"

Navbar.defaultProps = {
  navNames: ["Home", "Resumé", "Projects"]
}

function Navbar(props) {
  const { navNames, classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navs = navNames.map(
    nav =>
      <NavLink
        key={nav}
        to={`/${nav}`}
        className={classes.link}
        activeClassName={classes.chosen}
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

  const menuNavs = navNames.map(
    nav =>
      <MenuItem key={nav} onClick={handleClose}>
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
      </MenuItem>
  )

  return (
    <AppBar
      className={classes.navbar}
      position="static">
      <Toolbar className={classes.container}>
        <NavLink
          className={classes.link}
          to="/home">
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
        <div className={classes.rightNavs}>
          <MenuRoundedIcon
            className={classes.menuIcon}
            onClick={handleOpen}
          />
          <div className={classes.hiddingContainer}>
            {navs}
          </div>
          <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuNavs}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);