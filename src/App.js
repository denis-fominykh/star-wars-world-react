import React, { Component } from 'react';

import './App.scss';

import { SwapiService } from './services/swapiService';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { SwapiServiceProvider } from './components/SwapiServiceContext/SwapiServiceContext';
import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import { Row } from './components/Row/Row';
import { PersonList, PlanetList, StarshipList } from './components/SWComponents/ItemLists';
import PersonDetails from './components/SWComponents/PersonDetails';
import PlanetDetails from './components/SWComponents/PlanetDetails';
import StarshipDetails from './components/SWComponents/StarshipDetails';
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
            <Row
              leftBlock={<PersonList />}
              rightBlock={<PersonDetails itemId={4} />}
            />
            <Row
              leftBlock={<PlanetList />}
              rightBlock={<PlanetDetails itemId={4} />}
            />
            <Row
              leftBlock={<StarshipList />}
              rightBlock={<StarshipDetails itemId={9} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
