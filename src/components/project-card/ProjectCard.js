import React from "react";
import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./ProjectStyles"

export default function Project(props) {
  const { project } = props;
  const classes = useStyles();
  return (
    <Grid
      item
      sm={4}
      className={classes.itemContainer}
    >
      <Card className={classes.card}>
        <CardActionArea
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
