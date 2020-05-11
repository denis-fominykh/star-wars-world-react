import React, { Component } from 'react';
import { Row } from '../Row/Row';
import { StarshipList } from '../SWComponents/ItemLists';
import StarshipDetails from '../SWComponents/StarshipDetails';

export class StarshipsPage extends Component {
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
        leftBlock={<StarshipList onItemSelected={this.onItemSelected} />}
        rightBlock={<StarshipDetails itemId={selectedItem} />}
      />
    )
  }
}
