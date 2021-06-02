import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { withStyles } from "@material-ui/styles";
import sizes from "../../global-styles/sizes"

const styles = {
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  viewer: {
    margin: "90px 0 20px 0",
    width: "60%",
    [sizes.down("xl")]: {
      width: "65%",
    },
    [sizes.down("lg")]: {
      width: "75%",
    },
    [sizes.down("md")]: {
      width: "90%",
    },
    [sizes.down("sm")]: {
      width: "95%",
    },
  }
};

function FullCV(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Navbar />
      <embed className={classes.viewer} src="https://res.cloudinary.com/dufbyqbkk/image/upload/v1622646802/Portfolio/James'-Resume(new).pdf"
        type="application/pdf"></embed>
    </div>
  )
};

export default withStyles(styles)(FullCV);