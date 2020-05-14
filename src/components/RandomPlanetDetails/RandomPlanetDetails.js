import React, { Component } from 'react';

import './RandomPlanetDetails.scss';

import { SwapiService } from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';
import { RandomPlanetView } from '../RandomPlanetView/RandomPlanetView';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';

export class RandomPlanetDetails extends Component {
  static defaultProps = {
    updateInterval: 10000,
  }

  static propsType = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) {
        return null;
      }

      return new TypeError(`${componentName}: ${propName} must be number`);
    }
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
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
    const content = !(loading || error) ? <RandomPlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}
