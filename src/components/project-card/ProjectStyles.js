import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  card: {
    margin: "0 30px",
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    textAlign: "left",
    height: 750,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "rgba(255,255,255,.8)",
    },
    "&:hover media": {
      opacity: "1",
    }
  },
  media: {
    height: 440,
    cursor: `url(${mouseClick}), auto`,
    "&:hover": {
    },
  }
});