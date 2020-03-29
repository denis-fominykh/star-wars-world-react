import React, { Component } from 'react';

import { ItemList } from '../ItemList/ItemList';
import { StarshipDetails } from '../StarshipDetails/StarshipDetails';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import { SwapiService } from '../../services/swapiService';

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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onStarshipSelected}
                    getData={this.swapiService.getAllStarships}
                    renderItem={item => item.name}
          />
        </div>
        <div className="col-md-6">
          <StarshipDetails starshipId={this.state.selectedStarship}/>
        </div>
      </div>
    )
  }
}
