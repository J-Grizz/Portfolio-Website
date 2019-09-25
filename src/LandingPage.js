import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import "./styles/transitions.css"
import Paper from '@material-ui/core/Paper';

import img1 from "./images/background1.jpg";
import img2 from "./images/background2.jpg";
import img3 from "./images/background3.jpg";
import clickCursor from "./images/clickCursor.png"
import cursor from "./images/cursor.png"

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001b72",
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: "1",
    cursor: `url(${cursor}), auto`
  },
  landingContainer: {
    backgroundColor: "rgba(255,255,255,0.4)",
    color: "#0f1117",
    padding: "50px",
    cursor: `url(${clickCursor}), auto`,
    "& h3": {
      lineHeight: "80px",
      fontSize: "2rem",
    },
    "& p": {
      lineHeight: "40px",
      fontSize: "1.4rem",
      fontWeight: "500"
    }
  },
  backgroundStyles: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    color: "transparent",
    opacity: "1",
    zIndex: "-1000",
    margin: "0"
  }
})

LandingPage.defaultProps = {
  imgs: [img1, img2, img3],
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { imgs } = props;
  const [count, setCount] = useState(0);
  const [currentImg, setCurrentImg] = useState(imgs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      count < imgs.length - 1 ? setCount(count => count + 1) : setCount(0);
      setCurrentImg(imgs[count]);
    }, 5000);
    return () => clearInterval(interval);
  }, [count, imgs]);

  return (
    <div className={classes.root}>
      <TransitionGroup>
        <CSSTransition
          in={true}
          appear={false}
          key={count}
          timeout={1000}
          classNames={"slide"}
        >
          <img className={classes.backgroundStyles} src={currentImg} alt="back" />
        </CSSTransition>
      </TransitionGroup>


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
