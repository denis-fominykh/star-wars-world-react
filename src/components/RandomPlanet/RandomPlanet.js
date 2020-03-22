import React, { Component } from 'react';

import './RandomPlanet.scss';

import { SwapiService } from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';
import { PlanetView } from '../PlanetView/PlanetView';

export class RandomPlanet extends Component {
  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
      loading: true,
    };
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}
