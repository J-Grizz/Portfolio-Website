import React from 'react';
import { Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import BackgroundSlider from "./components/background-slider/BackgroundSlider";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/homepage/HomePage";
import Page from "./components/page/Page"

import './App.css';

import img1 from "./media/background1.jpg";
import img2 from "./media/background2.jpg";
import img3 from "./media/background3.jpg";
import img5 from "./media/background5.jpg";
import img6 from "./media/background6.jpg";
import img7 from "./media/background7.jpg";
import img8 from "./media/background8.jpg";
import img9 from "./media/background9.jpg";
import img10 from "./media/background10.jpg";
import img11 from "./media/background11.jpg";

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
              timeout={1000}
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
