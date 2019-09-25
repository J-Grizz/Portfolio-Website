import { makeStyles } from "@material-ui/styles";
import clickCursor from "../images/mouseClick.png"
import cursor from "../images/mouse.png"

export default makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#001b72",
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: "1",
    cursor: `url(${cursor}), auto`,
    "&:active": {
      cursor: `url(${clickCursor}), auto`,
    }
  },
  landingContainer: {
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#edeef2",
    textShadow: "2px 2px rgba(0,0,0,0.8)",
    "& h3": {
      fontSize: "2.5rem",
    },
    "& p": {
      fontSize: "1.6rem",
      fontWeight: "500"
    }
  },
})