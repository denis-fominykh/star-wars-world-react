import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { PlanetDetails } from '../PlanetDetails/PlanetDetails';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';

export class PlanetsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPlanet: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={item => item.name}
      />
    );

    const planetDetails = (
      <PlanetDetails planetId={this.state.selectedPlanet}/>
    );

    return (
      <Row leftBlock={itemList} rightBlock={planetDetails}/>
    )
  }
}
