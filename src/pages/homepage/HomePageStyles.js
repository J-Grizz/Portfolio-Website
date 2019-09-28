import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  root: {
    top: "0",
    userSelect: "none",
    position: "absolute",
    width: "100%",
    height: "100vh",
    zIndex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.4) !important",
    paddingTop: "115px",
    paddingLeft: "36px",
    paddingRight: "36px",
    color: "#edeef2",
  },
  utilityContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "875px",
    height: "800px",
  },
  utilityPaper: {
    width: "875px",
    height: "240px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
})