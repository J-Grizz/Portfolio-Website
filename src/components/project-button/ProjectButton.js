import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import useStyles from "./ProjectButtonStyles";
import img from "../../media/projects-cover.png";

export default function ProjectButton() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.hiddenCont}>
          <h1 className={classes.hiddenText}>Click to see all projects</h1>
        </div>
        <CardMedia
          className={classes.media}
          image={img}
        />
      </CardActionArea>

    </Card>
  )
}
