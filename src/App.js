import React, { Component } from 'react';

import './App.scss';

import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import { PersonsPage } from './components/PersonsPage/PersonsPage';
import { ErrorIndicator } from './components/ErrorIndicator/ErrorIndicator';

export class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanetDetails />
        <PersonsPage />
      </div>
    );
  }
}
