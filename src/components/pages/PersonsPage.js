import React, { Component } from 'react';
import { Row } from '../Row/Row';
import { PersonList } from '../SWComponents/ItemLists';
import PersonDetails from '../SWComponents/PersonDetails';

export class PersonsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        leftBlock={<PersonList onItemSelected={this.onItemSelected} />}
        rightBlock={<PersonDetails itemId={selectedItem} />}
      />
    )
  }
}
