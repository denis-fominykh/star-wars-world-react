import React, { Component } from 'react';

import './App.scss';

import { SwapiService } from './services/swapiService';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import { PersonList, PlanetList, StarshipList } from './components/SWComponents/ItemLists';
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/SWComponents/Details';
import { ErrorIndicator } from './components/ErrorIndicator/ErrorIndicator';

export class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundary>
        <div className="container">
          <Header />
          <RandomPlanetDetails />

          <PersonDetails itemId={4} />
          <PlanetDetails itemId={4} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <PlanetList />
          <StarshipList />
        </div>
      </ErrorBoundary>
    );
  }
}
