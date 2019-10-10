import React from 'react'
import useStyles from "./ProjectButtonStyles";
import img from "../../media/interactive-iPhone1.png"
import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function ProjectButton() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Click here to see all my projects
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
          
          </Typography> */}
        </CardContent>
      </CardActionArea>

    </Card>
  )
}
