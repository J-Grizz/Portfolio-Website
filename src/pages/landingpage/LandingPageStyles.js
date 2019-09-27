import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png"


export default makeStyles({
  root: {
    userSelect: "none",
    textAlign: "center",
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#edeef2",
    textDecoration: "none",
    textShadow: "2px 2px rgba(0,0,0,0.6)",
    letterSpacing: ".3rem",
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
    "& h1": {
      marginTop: 0,
      fontSize: "4rem",
    },
    "& h2": {
      fontSize: "2.3rem",
      fontWeight: "500"
    },
    "& h3": {
      marginTop: "60px",
      fontSize: "1.3rem",
      fontWeight: "500"
    },
  }
})