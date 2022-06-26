/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IPlace from './interfaces';

const places: IPlace[] = [
  {
    id: 1,
    name: 'Saaremaa suvila',
    address: 'Pahapilli küla, Saaremaa',
  },
];

const placesService: any = {};

placesService.getAll = (): IPlace[] => places;

placesService.getById = (id: number): IPlace | undefined => {
  const place = places.find((element) => element.id === id);
  return place;
};

export default placesService;
