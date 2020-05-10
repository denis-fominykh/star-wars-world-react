import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { withChildFunction } from '../HOC/WithChildFunction';
import { withData } from '../HOC/WithData';
import { SwapiService } from '../../services/swapiService';

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const ListWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>)

export const PersonList = withData(ListWithChildren, getAllPeople);
export const PlanetList = withData(ListWithChildren, getAllPlanets);
export const StarshipList = withData(ListWithChildren, getAllStarships);
