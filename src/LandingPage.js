import React from "react"
import Paper from '@material-ui/core/Paper';
import BackgroundSlider from "./BackgroundSliderComponent";
import useStyles from "./styles/LandingPageStyles"
import img1 from "./images/background1.jpg";
import img2 from "./images/background2.jpg";
import img3 from "./images/background3.jpg";
import img5 from "./images/background5.jpg";
import img6 from "./images/background6.jpg";
import img7 from "./images/background7.jpg";
import img8 from "./images/background8.jpg";
import img9 from "./images/background9.jpg";
import img10 from "./images/background10.jpg";
import img11 from "./images/background11.jpg";

LandingPage.defaultProps = {
  imgs: [img1, img2, img3, img5, img6, img7, img8, img9, img10, img11],
  sliderDuration: 9
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
        <h1>
          Hello!
        </h1>
        <h2>
          My name is James Gray, welcome to my personal website.
        </h2>
        <h3>
          Click anywhere to find out more about me.
        </h3>
      </Paper>
    </div>
  )
}
