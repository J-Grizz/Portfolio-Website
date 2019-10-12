import React from "react";
import useStyles from "./HomePageStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Navbar from "../../components/navbar/Navbar";
import SumarisedPortFolio from "../../components/summarised-cv/SummarisedCV";
import ProjectButton from "../../components/project-button/ProjectButton";

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="space-around"
      alignItems="flex-start"
      className={classes.grid}
    >
      <Navbar />

      <Grid
        className={classes.gridItem}
        item
        md={6}
      >
        <Link className={classes.link} to="/resume">
          <SumarisedPortFolio />
        </Link>
      </Grid>
      <Grid
        className={classes.gridItem}
        item
        md={6}
      >
        <div
          className={classes.utilityContainer}
        >
          {/* <Link className={classes.link}>
            <Paper className={classes.utilityPaper}>
              My story preview
              </Paper>
          </Link> */}
          <Link className={classes.link} to="/projects">
            <ProjectButton />
          </Link>

          <div className={classes.butCont}>
            <div>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.button}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  href="https://github.com/J-Grizz">
                  github
              </a>
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.button}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  href="https://www.linkedin.com/in/james-gray-4910a0a2/">
                  LinkedIn
              </a>
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
};