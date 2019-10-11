import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../global-styles/transitions.css";
import useStyles from "./BackgroundSliderStyles";
import img1 from "../../media/background10.jpg";
import img2 from "../../media/background1.jpg";
import img3 from "../../media/background2.jpg";
import img4 from "../../media/background6.jpg";
import img5 from "../../media/background7.jpg";
import img7 from "../../media/background9.jpg";

BackgroundSliderComponent.defaultProps = {
  imgs: [img1, img2, img3, img4, img5, img7],
}

export default function BackgroundSliderComponent(props) {
  const classes = useStyles();
  const { imgs, duration } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count < imgs.length - 1 ? setCount(count => count + 1) : setCount(0);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [count, imgs, duration]);

  return (
    <div>
      <img className={classes.hiddenImg} src={imgs[count + 1]} alt="" />
      <img className={classes.hiddenImg} src={imgs[count + 2]} alt="" />
      <TransitionGroup>
        <CSSTransition
          appear={false}
          key={count}
          timeout={5000}
          classNames={"slide"}
        >
          <img className={classes.backgroundStyles} src={imgs[count]} alt="back" />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
