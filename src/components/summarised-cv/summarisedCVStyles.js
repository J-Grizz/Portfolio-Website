import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  card: {
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    textAlign: "left",
    maxWidth: 875,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "rgba(255,255,255,.8)",
    },
    "&:hover h1": {
      opacity: 1,
    }
  },
  media: {
    height: 200,
    cursor: `url(${mouseClick}), auto`,
  },
  hiddenCont: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  hiddenText: {
    transition: "all 700ms ease-in-out",
    color: "white",
    position: "absolute",
    top: 70,
    opacity: 0
  }
});