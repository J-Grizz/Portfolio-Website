import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useStyles from "./BackgroundSliderStyles"
import "../../global-styles/transitions.css"

export default function BackgroundSliderComponent(props) {
  const classes = useStyles();
  const { imgs, duration } = props;
  const [count, setCount] = useState(1);
  const [currentImg, setCurrentImg] = useState(imgs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      count < imgs.length - 1 ? setCount(count => count + 1) : setCount(0);
      setCurrentImg(imgs[count]);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [count, imgs, duration]);

  return (
    <TransitionGroup>
      <img className={classes.hiddenImg} src={imgs[count + 1]} alt="" />
      <CSSTransition
        in={true}
        appear={false}
        key={count}
        timeout={5000}
        classNames={"slide"}
      >
        <img className={classes.backgroundStyles} src={currentImg} alt="back" />
      </CSSTransition>
    </TransitionGroup>
  )
}
