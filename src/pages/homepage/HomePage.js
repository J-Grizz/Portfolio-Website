import React from 'react'
import useStyles from "./HomePageStyles"
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import SumarisedPortFolio from "../../components/summarised-cv/SummarisedCV"

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-around"
      alignItems="flex-start"
      className={classes.grid}
    >
      <Navbar />

      <Grid
        className={classes.gridItem}
        item
        sm={6}
      >
        <SumarisedPortFolio />
      </Grid>
      <Grid
        className={classes.gridItem}
        item
        sm={6}
      >
        <div
          className={classes.utilityContainer}
        >
          <Link className={classes.link}>
            <Paper className={classes.utilityPaper}>
              My story preview
              </Paper>
          </Link>
          <Link className={classes.link} to="/projects">
            <Paper className={classes.utilityPaper}>
              project previewbar
             </Paper>
          </Link>
          <Link className={classes.link}>
            <Paper className={classes.utilityPaper}>
              find out more about me (github, linkein etc)
              </Paper>
          </Link>
        </div>
      </Grid>

    </Grid >
  )
}
