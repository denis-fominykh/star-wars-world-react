import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceContext/SwapiServiceContext';

export const withSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <Wrapped {...props} swapiService={swapiService} />
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
}
