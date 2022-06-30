/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IDevice from './devices/interfaces';
import ISensor from './sensors/interfaces';
import IPlace from './places/interfaces';

interface IDb {
  places: IPlace[];
  devices: IDevice[];
  sensors: ISensor[];
}

const db: IDb = {
  places: [
    {
      id: 1,
      name: 'Saaremaa suvila',
      address: 'Pahapilli küla, Saaremaa',
    },
  ],
  devices: [
    {
      id: 1,
      name: 'Teine korrus',
      placeId: 1,
    },
    {
      id: 2,
      name: 'Esimene korrus',
      placeId: 1,
    },
  ],
  sensors: [
    {
      id: 1,
      name: 'Temperatuur',
      type: 'temperature',
      units: 'C',
      deviceId: 1,
      readings: [],
    },
    {
      id: 2,
      name: 'Temperatuur',
      type: 'temperature',
      units: 'C',
      deviceId: 2,
      readings: [],
    },
  ],
};

export default db;
