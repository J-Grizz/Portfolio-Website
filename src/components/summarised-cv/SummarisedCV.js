import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import cardBackground from "../../media/cardBackground.jpg";
import mouseClick from "../../media/mouseClick.png";

const useStyles = makeStyles({
  card: {
    backgroundColor: "rgba(255,255,255,.6)",
    color: "black",
    textAlign: "left",
    maxWidth: 875,
    height: 800,
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
    height: 200,
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
  },
  cardContent: {
    cursor: `url(${mouseClick}), auto`,
    "&:active": {
      cursor: `url(${mouseClick}), auto`
    },
    "& p": {
      margin: "45px 0",
      fontSize: "1.1rem"
    }
  },
})

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
        <CardContent
          className={classes.cardContent}
        >
          <Typography gutterBottom variant="h5" component="h2">
            Summarised CV
          </Typography>
          <Typography variant="body2" component="p">
            Personal description:
                  <br></br>
            Once an idealistic boy, slightly mislead and lost in the wilderness. I have now discovered not just my passion but something much more. I find it hard to describe but I'm sure those who understand can relate.
          </Typography>
          <Typography variant="body2" component="p">
            Expereince:
                  <br></br>
            In regards to programming I have no professional expierience to date, I do however have a willingness to learn and a passion for problem solving. I believe my potential far outweights my lack of professional experience, but dont take my word for it, check out my projects and decide for yourself.
          </Typography>
          <Typography variant="body2" component="p">
            Familiar Technologies:
                  <br></br>
            -HTML   -CSS   -JavaScript   -React   -MaterialUI   -Bootstrap   -JQuery   -SCSS   -JSS   -NodeJS   -Express   -NPM   -Git   -GitHub
          </Typography>
          <Typography variant="body2" component="p">
            Skills:
                  <br></br>
            -Problem Solving -Logic -Tying Knots
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  )
}
