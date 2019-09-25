import React from "react"
import Paper from '@material-ui/core/Paper';
import BackgroundSlider from "./BackgroundSliderComponent";
import useStyles from "./styles/LandingPageStyles"
import img1 from "./images/background1.jpg";
import img2 from "./images/background2.jpg";
import img3 from "./images/background3.jpg";

LandingPage.defaultProps = {
  imgs: [img1, img2, img3],
  sliderDuration: 8
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { imgs, sliderDuration } = props;

  return (
    <div className={classes.root}>
      <BackgroundSlider
        duration={sliderDuration}
        imgs={imgs}
      />
      <Paper className={classes.landingContainer}>
        <h3>
          Hello and Welcome to my Website.
        </h3>
        <p>
          My name is James Gray, click anywhere to learn more about me.
        </p>
      </Paper>
    </div>
  )
}
