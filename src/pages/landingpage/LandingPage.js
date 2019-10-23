import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./LandingPageStyles";

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/home">
      <div>
        <h1>
          Hello and Welcome!
      </h1>
        <h2>
          My name is James Gray, and this is my personal website.
      </h2>
        <h3>
          Click anywhere to find out more about me.
      </h3>
      </div>
    </Link>
  )
}
