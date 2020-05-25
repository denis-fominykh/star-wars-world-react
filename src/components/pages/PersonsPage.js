import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../Row/Row';
import { PersonList } from '../SWComponents/ItemLists';
import PersonDetails from '../SWComponents/PersonDetails';

const PersonsPage = ({ history, match}) => {
  const { id } = match.params;

  return (
    <Row
      leftBlock={<PersonList onItemSelected={(id) => history.push(id)} />}
      rightBlock={<PersonDetails itemId={id} />}
    />
  )
}

export default withRouter(PersonsPage);
