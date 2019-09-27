import React from "react"
import useStyles from "./LandingPageStyles"
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/homepage">
      <div>
        <h1>
          Hello and Welcome !
      </h1>
        <h2>
          My name is James Gray, and this is my personal website.
      </h2>
        <h3>
          Please click anywhere to find out more about me.
      </h3>
      </div>
    </Link>
  )
}