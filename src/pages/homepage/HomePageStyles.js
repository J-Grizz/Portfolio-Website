import mouseClick from "../../media/mouseClick.png";
import sizes from "../../global-styles/sizes";

const styles = {
  grid: {
    width: "100% !important",
    margin: "0 !important",
    padding: "1.5rem",
    paddingTop: "110px",
    userSelect: "none",
    "& > div": {
      [sizes.down("md")]: {
        padding: "0 5px 30px 5px !important",
      }
    },

    [sizes.down("md")]: {
      padding: "0",
      paddingTop: "110px",
    }
  },
  utilityContainer: {
    height: "730px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& a": {
      height: "10%",
    },
  },
  butCont: {
    display: "flex",
    justifyContent: "flex-end",
    "& div": {
      backgroundColor: "rgba(255,255,255,.3)",
      padding: "5px 7px",
      borderRadius: "3px",
      [sizes.down("md")]: {
        marginTop: "610px",
      }
    }
  },
  link: {
    color: "black",
    textDecoration: "none",
    cursor: `url(${mouseClick}), auto`,
    "& img": {
      marginRight: "4px"
    }
  },
  button: {
    margin: "0 5px !important",
    fontSize: "1.5rem !important",
    fontFamily: "'Ubuntu', sans-serif;",
    cursor: `url(${mouseClick}), auto !important`,
    backgroundColor: "rgba(255,255,255,.2)",
    transition: "all 400ms ease-in-out !important",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.5)"
    },
    "& a": {
      justifyContent: "space-between",
      display: "flex"
    }
  }
};

export default styles;