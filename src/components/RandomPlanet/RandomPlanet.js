import React, { Component } from 'react';

import './RandomPlanet.scss';

import { SwapiService } from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';
import { PlanetView } from '../PlanetView/PlanetView';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';

export class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
    });
  }

  onError = error => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}
