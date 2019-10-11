import React from "react";
import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useStyles from "./ProjectStyles"
import ProjectContent from "./children/Content";
import WriteUpDialog from "./children/WriteUpDialog";

export default function Project(props) {
  const [open, setOpen] = React.useState(false);
  const { projectData } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Grid
      item
      sm={4}
      className={classes.itemContainer}
    >
      <Card className={classes.card}>
        <CardActionArea
          href={projectData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            className={classes.media}
            image={projectData.image}
          />
          <ProjectContent projectData={projectData} />
        </CardActionArea>
        <CardActions>
          <Button className={classes.button} onClick={handleClickOpen} size="small" color="primary">
            Full Writeup
          </Button>
          <a
            className={classes.link}
            href={projectData.gitHub}
            target="_blank"
            rel="noopener noreferrer">
            <Button className={classes.button} size="small" color="primary">
              Repository
            </Button>
          </a>
        </CardActions>

        <WriteUpDialog
          projectData={projectData}
          handleClose={handleClose}
          open={open}
        />
      </Card>
    </Grid>
  )
};