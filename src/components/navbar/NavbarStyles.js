import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    width: "100vw",
    position: "fixed",
    flexGrow: 1,
    zIndex: 10,
  },
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  navbar: {
    background: "rgba(0,0,0,.7)",
  },
  navButton: {
    width: "170px",
    cursor: "none",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.1)"
    }
  },
  link: {
    cursor: "none",
    color: "white",
    textDecoration: "none",
  }
}));