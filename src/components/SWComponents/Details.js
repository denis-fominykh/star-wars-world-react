import React from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { Record } from '../Record/Record';
import { SwapiServiceConsumer } from '../SwapiServiceContext/SwapiServiceContext';

export const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getPerson}
              getImageUrl={swapiService.getPersonImage}
            >
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getPlanet}
              getImageUrl={swapiService.getPlanetImage}
            >
              <Record field="population" label="Population" />
              <Record field="rotationPeriod" label="Rotation Period" />
              <Record field="diameter" label="Diameter" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getStarship}
              getImageUrl={swapiService.getStarshipImage}
            >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};
