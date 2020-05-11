import React, { Component } from 'react';
import { Row } from '../Row/Row';
import { PlanetList } from '../SWComponents/ItemLists';
import PlanetDetails from '../SWComponents/PlanetDetails';

export class PlanetsPage extends Component {
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
        leftBlock={<PlanetList onItemSelected={this.onItemSelected} />}
        rightBlock={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}
