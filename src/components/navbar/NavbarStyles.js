import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    width: "100vw",
    position: "fixed",
    flexGrow: 1,
    zIndex: 10
  },
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