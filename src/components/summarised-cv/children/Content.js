import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";
import mouseClick from "../../../media/mouseClick.png";

const useStyles = makeStyles({
  cardContent: {
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
    "& h2": {
      marginTop: "0px"
    },
    "& h4": {
      marginTop: "20px"
    },
    "& p": {
      lineHeight: "28px",
      display: "inline-block",
      fontSize: "1.1rem",
      paddingRight: "50px"
    }
  },
  contentContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  }
})

export default function Content(props) {
  const classes = useStyles();
  const { content } = props;

  const CVContent = content.map(each => {
    return (
      <div>
        <Typography gutterBottom variant="h5" component="h4">
          {each.topic}:
        </Typography>
        <div className={classes.contentContainer}>
          {each.content.map(section =>
            <Typography variant="body2" component="p">
              {section}
            </Typography>
          )}
        </div>
      </div>
    )
  })

  return (
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
        Summarised CV
      </Typography>
      {CVContent}
    </CardContent>

  )
}

