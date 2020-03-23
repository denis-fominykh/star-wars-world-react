import React, { Component } from 'react';

import './App.scss';

import { Header } from './components/Header/Header';
import { RandomPlanetDetails } from './components/RandomPlanetDetails/RandomPlanetDetails';
import { ItemList } from './components/ItemList/ItemList';
import { PersonDetails } from './components/PersonDetails/PersonDetails';

export class App extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanetDetails />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
