import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { withChildFunction } from '../HOC/WithChildFunction';
import { withData } from '../HOC/WithData';
import { withSwapiService } from '../HOC/WithSwapiService';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  }
}

const ListWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>);

export const PersonList = withSwapiService(
  withData(ListWithChildren),
  mapPersonMethodsToProps
);

export const PlanetList = withSwapiService(
  withData(ListWithChildren),
  mapPlanetMethodsToProps
);

export const StarshipList = withSwapiService(
  withData(ListWithChildren),
  mapStarshipMethodsToProps
);
