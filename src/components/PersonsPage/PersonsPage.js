import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import { SwapiService } from '../../services/swapiService';
import { Row } from '../Row/Row';

export class PersonsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={item => `${item.name} (${item.gender}, ${item.birthYear})`}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <Row leftBlock={itemList} rightBlock={personDetails} />
    )
  }
}
