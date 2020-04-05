import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { StarshipDetails } from '../StarshipDetails/StarshipDetails';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';

export class StarshipsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedStarship: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onStarshipSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={item => item.name}
      />
    );

    const starshipDetails = (
      <StarshipDetails starshipId={this.state.selectedStarship}/>
    );

    return (
      <Row leftBlock={itemList} rightBlock={starshipDetails} />
    )
  }
}
