import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { PlanetDetails } from '../PlanetDetails/PlanetDetails';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import { SwapiService } from '../../services/swapiService';

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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPlanetSelected}
                    getData={this.swapiService.getAllPlanets}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails planetId={this.state.selectedPlanet}/>
        </div>
      </div>
    )
  }
}
