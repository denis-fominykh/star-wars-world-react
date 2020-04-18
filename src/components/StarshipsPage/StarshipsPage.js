import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { StarshipDetails } from '../StarshipDetails/StarshipDetails';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export class StarshipsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedStarship: null,
  };

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id,
    });
  }

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onStarshipSelected}
                getData={this.swapiService.getAllStarships}
      >
        {item => item.name}
      </ItemList>
    );

    const starshipDetails = (
      <ErrorBoundary>
        <StarshipDetails starshipId={this.state.selectedStarship} />
      </ErrorBoundary>
    );

    return (
      <Row leftBlock={itemList} rightBlock={starshipDetails} />
    )
  }
}
