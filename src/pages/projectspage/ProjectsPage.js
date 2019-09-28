import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../../components/navbar/Navbar";
import ProjectCard from "../../components/project-card/ProjectCard";
import useStyles from "./ProjectsPageStyles"

ProjectsPage.defaultProps = {
  projects: [
    { name: "Interactive iPhone", url: "https://interactive-iphone.herokuapp.com/" },
    { name: "View Views" },
    { name: "Color Palette Project" }
  ],
};

export default function ProjectsPage(props) {
  const classes = useStyles()
  const { projects } = props;
  const projectCards = projects.map(project => <ProjectCard project={project} />)
  return (
    <Grid
      container
      alignItems="flex-start"
      className={classes.grid}
    >
      <Grid item sm={12}>
        <Navbar />
      </Grid>
      {projectCards}
    </Grid >
  )
};