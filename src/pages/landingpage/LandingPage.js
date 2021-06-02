import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./LandingPageStyles";

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/home">
      <div>
        <h1>
          James Gray
      </h1>
        <h2>
          Full Stack Web Developer
      </h2>
        <h3>
          Click anywhere to continue
      </h3>
      </div>
    </Link>
  )
}
