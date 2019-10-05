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
            image={project.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Those with a descerning eye should notice that this is infact just a pretty skin put onto Colt Steels famous YelpCamp project from the webdev Bootcamp on Udemy therefore the point of this project not only intended to show my back-end skills with a simple CRUD project using a MEN stack and EJS as a view engine, deplyed with heroku and mongoAAtlas as a database (although I have grasped and understood the concepts) but mainly to display how I migrated the old Bootstrap v3 design to Boostrap 4 and vamped it up with mdbootstrap for a classy material finish, all without the aid of any video follow along.
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
};