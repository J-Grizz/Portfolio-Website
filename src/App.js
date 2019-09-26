import React from 'react';
import { Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import BackgroundSlider from "./BackgroundSliderComponent";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import Page from "./Page"

import './App.css';

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

App.defaultProps = {
  imgs: [img1, img2, img3, img5, img6, img7, img8, img9, img10, img11],
  sliderDuration: 9
}

function App(props) {
  const { imgs, sliderDuration } = props;

  return (
    <div className="App">

      <BackgroundSlider
        duration={sliderDuration}
        imgs={imgs}
      />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              classNames="page"
              timeout={500}
              key={location.key}
            >
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Page>
                      <LandingPage />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/homepage"
                  render={() =>
                    <Page>
                      <HomePage />
                    </Page>
                  }
                />
                <Route
                  render={() => (
                    <Page>
                      <LandingPage />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
    </div>
  );
}

export default App;
