import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import { ErrorIndicator, NotFoundIndicator } from "../errors";
import ErrorBoundary from "../error-boundary";

import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
  WelcomePage,
} from "../pages";

import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { isLoggedIn, swapiService } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" component={WelcomePage} exact />
                <Route path="/people/:id?" element={<PeoplePage />} />
                <Route path="/planets/:id?" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
                <Route
                  path="/starships/:id"
                  element={
                    <StarshipDetails
                      itemId={window.location.pathname.split("/").pop()}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  }
                />
                <Route
                  path="/secret"
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route path="*" element={<NotFoundIndicator />} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
