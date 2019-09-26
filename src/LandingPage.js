import React from "react"
import useStyles from "./styles/LandingPageStyles"
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Link className={classes.root} to="/homepage">
      <h1>
        Hello!
      </h1>
      <h2>
        My name is James Gray. Welcome to my personal website.
      </h2>
      <h3>
        Click anywhere to find out more about me.
      </h3>
    </Link>
  )
}
