import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  grid: {
    width: "100% !important",
    margin: "0 !important",
    padding: "1.5rem",
    paddingTop: "110px",
    userSelect: "none",
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
      borderRadius: "3px"
    }
  },
  link: {
    color: "black",
    textDecoration: "none",
    cursor: `url(${mouseClick}), auto`,
  },
  button: {
    margin: "0 5px !important",
    fontSize: "1.5rem !important",
    fontFamily: "'Ubuntu', sans-serif;",
    cursor: `url(${mouseClick}), auto !important`,
    backgroundColor: "rgba(255,255,255,.2) !important",
    transition: "all 400ms ease-in-out !important",
    "&:hover": {
      transform: "scale(1.03)"
    }
  }
});