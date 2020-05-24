import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import { SwapiService } from './services/swapiService';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { SwapiServiceProvider } from './components/SwapiServiceContext/SwapiServiceContext';
import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import { PersonsPage } from './components/pages/PersonsPage';
import { PlanetsPage } from './components/pages/PlanetsPage';
import { StarshipsPage } from './components/pages/StarshipsPage';
import { ErrorIndicator } from './components/ErrorIndicator/ErrorIndicator';
import PersonDetails from './components/SWComponents/PersonDetails';
import PlanetDetails from './components/SWComponents/PlanetDetails';
import StarshipDetails from './components/SWComponents/StarshipDetails';

export class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanetDetails updateInterval={7000} />
              <Route path="/"
                     render={() => (
                       <div>
                         <PersonsPage />
                         <PlanetsPage />
                         <StarshipsPage />
                       </div>
                     )}
                     exact
              />
              <Route path="/people" component={PersonsPage} exact />
              <Route path="/people/:id"
                     render={({match}) => {
                       const { id } = match.params;
                       return <PersonDetails itemId={id} />
                     }}
              />
              <Route path="/planets" component={PlanetsPage} exact />
              <Route path="/planets/:id"
                     render={({match}) => {
                       const { id } = match.params;
                       return <PlanetDetails itemId={id} />
                     }}
              />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/starships/:id"
                     render={({match}) => {
                       const { id } = match.params;
                       return <StarshipDetails itemId={id} />
                     }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
