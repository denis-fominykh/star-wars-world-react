import React from 'react';

import './App.scss';

import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import { ItemList } from './components/ItemList/ItemList';

export const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
      </div>
    </div>
  );
}
