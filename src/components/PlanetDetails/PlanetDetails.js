import React, { Component } from 'react';

import './PlanetDetails.scss';
import { SwapiService } from '../../services/swapiService';
import { PlanetView } from '../PlanetView/PlanetView';
import { Spinner } from '../Spinner/Spinner';

export class PlanetDetails extends Component {
  swapiService = new SwapiService();

  state = {
    planet: null,
    loaded: true,
    error: null,
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (this.props.planetId !== prevProps.planetId) {
      this.onToggleSpinner();
      this.updatePlanet();
    }
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loaded: false,
    });
  }

  onError = error => {
    this.setState({ error });
  }

  onToggleSpinner = () => {
    this.setState({ loaded: true });
  }

  updatePlanet() {
    const { planetId } = this.props;
    if (!planetId) {
      return;
    }

    this.swapiService
      .getPlanet(planetId)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loaded, error } = this.state;

    const emptyPlanet = !planet ? <span>Select a planet from a list</span> : null;
    const spinner = (loaded && planet) ? <Spinner /> : null;
    const content = !(loaded || error) ? <PlanetView planet={planet}/> : null;

    return (
      <div className="planet-details card">
        {emptyPlanet}
        {spinner}
        {content}
      </div>
    )
  }
}
