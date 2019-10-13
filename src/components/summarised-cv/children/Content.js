import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../../media/mouseClick.png";

const useStyles = makeStyles({
  cardContent: {
    cursor: `url(${mouseClick}), auto`,
    "& h2": {
      marginTop: "0px"
    },
    "& h4": {
      marginTop: "15px"
    },
    "& p": {
      lineHeight: "25px",
      display: "inline-block",
      fontSize: "1.1rem",
      margin: 0
    }
  },
  contentContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  multiCont: {
    display: "flex",
    flexWrap: "wrap",
  },
  singCont: {
    marginBottom: "5px",
    marginRight: "5px",
    padding: "0 1rem",
    width: "auto",
    border: "2px solid black",
    borderRadius: "5px"
  }
});

export default function Content(props) {
  const classes = useStyles();
  const { content } = props;

  const skills = content.skills.content.map(
    each =>
      <div key={each} className={classes.singCont}>
        <Typography gutterBottom variant="body2" component="p">
          {each}
        </Typography>
      </div>
  );

  const famTech = content.famTech.content.map(
    each =>
      <div key={each} className={classes.singCont}>
        <Typography gutterBottom variant="body2" component="p">
          {each}
        </Typography>
      </div>
  );

  return (
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h4" component="h2">
        Summarised Resume
      </Typography>
      <Typography gutterBottom variant="h5" component="h4">
        {content.desc.topic}:
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        {content.desc.content}
      </Typography>
      <Typography gutterBottom variant="h5" component="h4">
        {content.exp.topic}:
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        {content.exp.content}
      </Typography>
      <Typography gutterBottom variant="h5" component="h4">
        {content.famTech.topic}:
      </Typography>
      <div className={classes.multiCont}>
        {famTech}
      </div>
      <Typography gutterBottom variant="h5" component="h4">
        {content.skills.topic}:
      </Typography>
      <div className={classes.multiCont}>
        {skills}
      </div>
    </CardContent>
  )
}

