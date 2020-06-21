import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../../components/Row/Row';
import { StarshipList } from '../../components/SWComponents/ItemLists';
import StarshipDetails from '../../components/SWComponents/StarshipDetails';

const StarshipsPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      leftBlock={<StarshipList onItemSelected={(id) => history.push(id)} />}
      rightBlock={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipsPage);
