import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project-card/ProjectCard";
import useStyles from "./ProjectsPageStyles"
import { projectData } from "../../portfolioData";

export default function ProjectsPage(props) {
  const classes = useStyles()
  const projectCards = projectData.map(project => <ProjectCard projectData={project} />)
  return (
    <Grid
      justify={"space-around"}
      container
      spacing={3}
      className={classes.grid}
    >
      <Navbar />
      {projectCards}
    </Grid>
  )
};