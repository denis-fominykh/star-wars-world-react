import React, { Component } from 'react';

import './StarshipDetails.scss';
import { SwapiService } from '../../services/swapiService';
import { StarshipView } from '../StarshipView/StarshipView';
import { Spinner } from '../Spinner/Spinner';

export class StarshipDetails extends Component {
  swapiService = new SwapiService();

  state = {
    starship: null,
    loaded: true,
    error: null,
  };

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps) {
    if (this.props.starshipId !== prevProps.starshipId) {
      this.onToggleSpinner();
      this.updateStarship();
    }
  }

  onStarshipLoaded = starship => {
    this.setState({
      starship,
      loaded: false,
    });
  }

  onError = error => {
    this.setState({ error });
  }

  onToggleSpinner = () => {
    this.setState({ loaded: true });
  }

  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }

    this.swapiService
      .getStarship(starshipId)
      .then(this.onStarshipLoaded)
      .catch(this.onError);
  }

  render() {
    const { starship, loaded, error } = this.state;

    const emptyStarship = !starship ? <span>Select a starship from a list</span> : null;
    const spinner = (loaded && starship) ? <Spinner /> : null;
    const content = !(loaded || error) ? <StarshipView starship={starship}/> : null;

    return (
      <div className="starship-details card">
        {emptyStarship}
        {spinner}
        {content}
      </div>
    )
  }
}
