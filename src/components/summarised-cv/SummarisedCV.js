import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import cardBackground from "../../media/cardBackground.jpg";
import useStyles from "./summarisedCVStyles"
import Content from "./children/Content"
import { CVObject } from "../../portfolioData"
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage"

export default function SummarisedPortfolio() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <ProgressiveImage
          className={classes.media}
          alt={"woman"}
          overlaySrc={
            "https://res.cloudinary.com/dufbyqbkk/image/upload/v1571035841/Portfolio/LoadImages/tinyImage_lbqch1.jpg"
          }
          src={
            "https://res.cloudinary.com/dufbyqbkk/image/upload/v1571035873/Portfolio/LoadImages/cardBackground_xlb4c1.jpg"
          }
        />
        <div className={classes.hiddenCont}>
          <h1 className={classes.hiddenText}> Click to view full Resume </h1>
        </div>
        <Content content={CVObject} />

      </CardActionArea>
    </Card>
  )
}
