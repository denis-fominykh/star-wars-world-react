import React, { Component } from 'react';

import './ItemList.scss';
import { SwapiService } from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';

export class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(this.onPeopleLoaded)
      .catch(this.onError);
  }

  onPeopleLoaded = peopleList => {
    this.setState({ peopleList });
  }

  onError = error => {
    this.setState({ error });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    })
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
