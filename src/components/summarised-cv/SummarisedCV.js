import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import cardBackground from "../../media/cardBackground.jpg";
import useStyles from "./summarisedCVStyles"
import Content from "./children/Content"
import { CVObject } from "./feederData"

export default function SummarisedPortfolio() {
  const classes = useStyles();
  return (

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardBackground}
          title="Books"
        />

        <Content content={CVObject} />

      </CardActionArea>

    </Card>
  )
}
