import React, { Component } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';

export const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: null,
    };

    componentDidMount() {
      this.props.getData()
        .then(this.onDataLoaded)
        .catch(this.onError);
    }

    onDataLoaded = data => {
      this.setState({
        data,
        loading: false,
      });
    }

    onError = error => {
      this.setState({
        error,
        loading: false,
      });
    }

    render() {
      const { data, loading, error } = this.state;

      const errorIndicator = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = !(error || loading) ? <View {...this.props} data={data} /> : null;

      return (
        <React.Fragment>
          {errorIndicator}
          {spinner}
          {content}
        </React.Fragment>
      );
    }
  };
};
