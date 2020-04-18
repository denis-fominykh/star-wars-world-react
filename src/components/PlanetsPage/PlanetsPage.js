import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { PlanetDetails } from '../PlanetDetails/PlanetDetails';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export class PlanetsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPlanet: null,
  };

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  }

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}
      >
        {item => item.name}
      </ItemList>
    );

    const planetDetails = (
      <ErrorBoundary>
        <PlanetDetails planetId={this.state.selectedPlanet} />
      </ErrorBoundary>
    );

    return (
      <Row leftBlock={itemList} rightBlock={planetDetails} />
    )
  }
}
