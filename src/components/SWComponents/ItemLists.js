import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { withChildFunction } from '../HOC/WithChildFunction';
import { withData } from '../HOC/WithData';
import { withSwapiService } from '../HOC/WithSwapiService';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const ListWithChildren = withChildFunction(({ name }) => <span>{name}</span>)(
  ItemList,
);

export const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(ListWithChildren),
);

export const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(ListWithChildren),
);

export const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(ListWithChildren),
);
