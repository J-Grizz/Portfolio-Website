import sizes from "../../global-styles/sizes"

const styles = {
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
  },
  rightNavs: {
    display: "flex",
    alignItems: "center",
  },
  hiddingContainer: {
    [sizes.down("sm")]: {
      display: "none"
    },
  },
  menuIcon: {
    marginRight: "2rem",
    fontSize: "2rem",
    display: "none",
    [sizes.down("sm")]: {
      display: "block"
    },
  },
  menu: {
    curson: "none",
    "& div": {
      background: "rgba(0,0,0,.7)",
      width: "100%"
    },
    "& li": {
      width: "100%"
    },
    "& a": {
      width: "100%"
    },
    "& button": {
      width: "100%"
    }
  }
};

export default styles;