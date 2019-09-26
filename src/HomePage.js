import React from 'react'
import Paper from '@material-ui/core/Paper';
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    top: "0",
    userSelect: "none",
    textAlign: "center",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#edeef2",
    textDecoration: "none",
    textShadow: "2px 2px rgba(0,0,0,0.6)",
    letterSpacing: ".3rem",
    "& h1": {
      fontSize: "4rem",
    },
    "& h2": {
      fontSize: "2.3rem",
      fontWeight: "500"
    },
    "& h3": {
      marginTop: "60px",
      fontSize: "1.3rem",
      fontWeight: "500"
    },
  }
})

export default function HomePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Paper className={classes.root}>
        <h1>Home Page</h1>
      </Paper>
    </div>
  )
}
