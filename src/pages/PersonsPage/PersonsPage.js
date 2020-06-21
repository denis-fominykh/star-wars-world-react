import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../../components/Row/Row';
import { PersonList } from '../../components/SWComponents/ItemLists';
import PersonDetails from '../../components/SWComponents/PersonDetails';

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
