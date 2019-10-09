import React from 'react';
import { Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import BackgroundSlider from "./components/background-slider/BackgroundSlider";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/homepage/HomePage";
import ProjectsPage from "./pages/projectspage/ProjectsPage"
import Page from "./components/page/Page"
import './App.css';
import img1 from "./media/background10.jpg";
import img2 from "./media/background1.jpg";
import img3 from "./media/background2.jpg";
import img4 from "./media/background6.jpg";
import img5 from "./media/background7.jpg";
import img6 from "./media/background8.jpg";
import img7 from "./media/background9.jpg";

App.defaultProps = {
  imgs: [img1, img2, img3, img4, img5, img6, img7],
  sliderDuration: 8
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
                  path="/home"
                  render={() =>
                    <Page>
                      <HomePage />
                    </Page>
                  }
                />
                <Route
                  exact
                  path="/projects"
                  render={() =>
                    <Page>
                      <ProjectsPage />
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

// My Story
// CV
// projects

export default App;
