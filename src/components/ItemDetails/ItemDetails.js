import React, { Component } from 'react';

import './ItemDetails.scss';
import { SwapiService } from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';

export class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loaded: true,
    error: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.onToggleSpinner();
      this.updateItem();
    }
  }

  onItemLoaded = item => {
    const { getImageUrl } = this.props;

    this.setState({
      item,
      image: getImageUrl(item),
      loaded: false,
    });
  }

  onError = error => {
    this.setState({ error });
  }

  onToggleSpinner = () => {
    this.setState({ loaded: true });
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError);
  }

  render() {
    const { item, image, loaded, error } = this.state;

    const emptyItem = !item ? <span>Select a person from a list</span> : null;
    const spinner = (loaded && item) ? <Spinner /> : null;
    const content = !(loaded || error) ? (
      <React.Fragment>
        <img className="item-image" src={image} alt="item" />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </React.Fragment>
    ) : null;

    return (
      <div className="item-details card">
        {emptyItem}
        {spinner}
        {content}
      </div>
    )
  }
}
