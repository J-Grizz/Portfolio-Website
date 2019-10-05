import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../media/mouseClick.png";

export default makeStyles({
  itemContainer: {
    paddingTop: "50px",
  },
  card: {
    opacity: ".9",
    color: "black",
    height: 750,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:hover": {
      transform: "scale(1.01)",
      opacity: "1",
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