import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from '../../components/Row/Row';
import { PlanetList } from '../../components/SWComponents/ItemLists';
import PlanetDetails from '../../components/SWComponents/PlanetDetails';

const PlanetsPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      leftBlock={<PlanetList onItemSelected={(id) => history.push(id)} />}
      rightBlock={<PlanetDetails itemId={id} />}
    />
  )
}

export default withRouter(PlanetsPage);
