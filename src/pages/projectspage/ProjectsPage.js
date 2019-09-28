import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../components/navbar/Navbar"
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mouseClick from "../../media/mouseClick.png";



const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0",
  },
  itemContainer: {
    paddingTop: "50px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%"
  },
  card: {
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    height: 750,
    maxWidth: 545,
    transition: "all 700ms ease-in-out",
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "rgba(255,255,255,.8)",
    },
  },
  media: {
    height: 440,
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
  }
})

ProjectsPage.defaultProps = {
  projects: [
    { name: "Interactive iPhone" },
    { name: "View Views" },
    { name: "Color Palette Project" }
  ],
}

export default function ProjectsPage(props) {
  const classes = useStyles()
  const { projects } = props;
  const proj = projects.map(
    project =>
      <Grid
        item
        sm={4}
        className={classes.itemContainer}
      >
        <Card className={classes.card}>
          <CardActionArea>
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
      </Grid>)
  return (
    <Grid
      container
      alignItems="flex-start"
      className={classes.grid}>
      <Grid item sm={12}>
        <Navbar></Navbar>
      </Grid>
      {proj}

    </Grid>
  )
}
