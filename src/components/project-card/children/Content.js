import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import mouseClick from "../../../media/mouseClick.png";


const useStyles = makeStyles({
  container: {
    height: 180,
    fontSize: "1.2rem",
    fontWeight: "100",
    overflow: "hidden",
    display: "flex",
    color: "rgb(50,50,50)"
  },
  cardContent: {
    cursor: `url(${mouseClick}), auto`,
  }
})

export default function Content(props) {
  const { projectData } = props;
  const classes = useStyles();
  return (
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
        {projectData.name}
      </Typography>
      <Box className={classes.container} component="div" textOverflow="ellipsis">
        {projectData.summary}
      </Box>
    </CardContent>
  )
}
