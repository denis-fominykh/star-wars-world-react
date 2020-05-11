import React, { Component } from 'react';

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
          <div className="container">
            <Header />
            <RandomPlanetDetails />
            <PersonsPage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
