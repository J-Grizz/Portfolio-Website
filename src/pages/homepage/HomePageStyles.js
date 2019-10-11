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
  gridItem: {
    width: "100%"
  },
  utilityContainer: {
    height: "780px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& a": {
      height: "10%",
    },
  },
  utilityPaper: {
    popsition: "relative",
    height: "10%",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,.6) !important",
    transition: "all 700ms ease-in-out !important",
    "&:hover": {
      transform: "scale(1.01)",
    }
  },
  link: {
    color: "black",
    textDecoration: "none",
    cursor: `url(${mouseClick}), auto`,
  },
  button: {
    fontFamily: "'Ubuntu', sans-serif;",
    fontSize: "1.5rem !important",
  }
});