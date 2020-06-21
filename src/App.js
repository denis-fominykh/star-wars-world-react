import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import { SwapiService } from './services/swapiService';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { SwapiServiceProvider } from './components/SwapiServiceContext/SwapiServiceContext';
import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import MainPage from './pages/MainPage';
import PersonsPage from './pages/PersonsPage';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';
import { ErrorIndicator } from './components/ErrorIndicator/ErrorIndicator';

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
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanetDetails updateInterval={7000} />
              <Route path="/" render={() => <MainPage />} exact />
              <Route path="/people/" component={() => <h2>People</h2>} />
              <Route path="/people/:id?" component={PersonsPage} exact />
              <Route path="/planets/" component={() => <h2>Planets</h2>} />
              <Route path="/planets/:id?" component={PlanetsPage} exact />
              <Route path="/starships/" component={() => <h2>Starships</h2>} />
              <Route path="/starships/:id?" component={StarshipsPage} exact />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
