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
    backgroundColor: "rgba(255,255,255,.8)",
    color: "black",
    textAlign: "left",
    minHeight: 750,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:hover div": {
      opacity: 1,
    },
    [sizes.down("md")]: {
      maxWidth: 600
    },
    [sizes.down("xs")]: {
      margin: 0,
      marginBottom: "30px",
      width: "98%"
    },
    "&:hover": {
      transform: "scale(1.01)",
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
  },
  hiddenCont: {
    top: 170,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    opacity: 0,
    position: "absolute",
    transition: "all 700ms ease-in-out",
    color: "black",
    cursor: `url(${mouseClick}), auto`,
  },
  hiddenText: {
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
    background: "rgba(255,255,255,.6)"
  }
};

export default styles;