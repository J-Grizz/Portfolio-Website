import React from 'react'
import { makeStyles } from "@material-ui/styles";
import Paper from '@material-ui/core/Paper';

import Navbar from "./Navbar"
import SumarisedPortFolio from "./SummarisedPortfolio"

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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingTop: "115px",
    paddingLeft: "36px",
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
  },

})

export default function HomePage(props) {
  const classes = useStyles();
  return (
    <div>

      <Navbar />

      <Paper className={classes.root}>
        <SumarisedPortFolio />

      </Paper>
    </div>
  )
}
