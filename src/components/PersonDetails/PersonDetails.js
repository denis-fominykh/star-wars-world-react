import React, { Component } from 'react';

import './PersonDetails.scss';
import { SwapiService } from '../../services/swapiService';
import { PersonView } from '../PersonView/PersonView';
import { Spinner } from '../Spinner/Spinner';

export class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loaded: true,
    error: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.onToggleSpinner();
      this.updatePerson();
    }
  }

  onPersonLoaded = person => {
    this.setState({
      person,
      loaded: false,
    });
  }

  onError = error => {
    this.setState({ error });
  }

  onToggleSpinner = () => {
    this.setState({ loaded: true });
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    const { person, loaded, error } = this.state;

    const emptyPerson = !person ? <span>Select a person from a list</span> : null;
    const spinner = (loaded && person) ? <Spinner /> : null;
    const content = !(loaded || error) ? <PersonView person={person}/> : null;

    return (
      <div className="person-details card">
        {emptyPerson}
        {spinner}
        {content}
      </div>
    )
  }
}
