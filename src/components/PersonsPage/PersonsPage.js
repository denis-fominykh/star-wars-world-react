import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export class PersonsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
      >
        {item => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <Row leftBlock={itemList} rightBlock={personDetails} />
    )
  }
}
