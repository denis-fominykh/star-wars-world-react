import React from 'react';

import './App.scss';

import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';

export const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
    </div>
  );
}
