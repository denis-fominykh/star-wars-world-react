import React from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { Record } from '../Record/Record';
import { withSwapiService } from '../HOC/WithSwapiService';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
