/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IPlace from './interfaces';
import db from '../db';

const placesService: any = {};

placesService.getAll = (): IPlace[] => db.places;

placesService.getById = async (id: number): Promise<IPlace | undefined> => {
  const place = await db.places.find((element) => element.id === id);
  return place;
};

export default placesService;
