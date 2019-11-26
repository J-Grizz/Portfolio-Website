import sizes from "../../global-styles/sizes";
import mouseClick from "../../media/mouseClick.png";


const styles = {
  navbar: {
    top: 0,
    left: 0,
    width: "100vw",
    position: "fixed",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    cursor: `url(${mouseClick}), auto`,
    color: "white",
    textDecoration: "none",
  },
  chosen: {
    color: "rgb(120,120,120)"
  },
  navButton: {
    width: "11rem",
    cursor: `url(${mouseClick}), auto`,
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.1)"
    }
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
    color: "white",
    marginRight: "2rem",
    fontSize: "2rem",
    display: "none",
    [sizes.down("sm")]: {
      display: "block"
    },
  },
  menu: {
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