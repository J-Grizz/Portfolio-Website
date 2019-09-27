import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  card: {
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    textAlign: "left",
    maxWidth: 875,
    height: 800,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "rgba(255,255,255,.8)",
    },
  },
  media: {
    height: 200,
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
  },

})