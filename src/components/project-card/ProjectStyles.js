import mouseClick from "../../media/mouseClick.png";
import sizes from "../../global-styles/sizes";

const styles = {
  itemContainer: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    margin: "0 30px",
    marginBottom: "30px",
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    textAlign: "left",
    height: 750,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    [sizes.down("md")]: {
      maxWidth: 600
    },
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
  },
  link: {
    textDecoration: "none",
    cursor: `url(${mouseClick}), auto`,
  },
  button: {
    cursor: `url(${mouseClick}), auto`,
    color: "black"
  }
};

export default styles;