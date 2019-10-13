import React from "react";
import { Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Page from "./components/page/Page"
import BackgroundSlider from "./components/background-slider/BackgroundSlider";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/homepage/HomePage";
import ProjectsPage from "./pages/projectspage/ProjectsPage"
import FullCV from "./pages/fullcv/FullCV"
import "./App.css";

function App() {
  return (
    <div className="App">

      <BackgroundSlider />

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
                  exact
                  path="/resume"
                  render={() =>
                    <Page>
                      <FullCV />
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
