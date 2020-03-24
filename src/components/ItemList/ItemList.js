import React, { Component } from 'react';

import './ItemList.scss';
import { Spinner } from '../Spinner/Spinner';

export class ItemList extends Component {
  state = {
    itemList: null,
    error: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(this.onItemListLoaded)
      .catch(this.onError);
  }

  onItemListLoaded = itemList => {
    this.setState({ itemList });
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
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
