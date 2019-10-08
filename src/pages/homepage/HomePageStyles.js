import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    padding: "1.5rem",
    paddingTop: "110px",
    userSelect: "none",
    color: "#edeef2",
  },
  utilityContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "800px",
    "& a": {
      height: "20%"
    },
    "& a:nth-of-type(1)": {
      height: "76%"
    }
  },
  utilityPaper: {
    height: "100%",
    fontSize: "2rem",
    backgroundColor: "rgba(255,255,255,.6) !important",
    transition: "all 700ms ease-in-out !important",
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "rgba(255,255,255,.8) !important",
    },
  },
  link: {
    textDecoration: "none",
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
  }
});