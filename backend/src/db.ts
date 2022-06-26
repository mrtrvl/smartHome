/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IDevice from './devices/interfaces';
import ISensor from './sensors/interfaces';
import { IReading } from './readings/interfaces';

interface IDb {
  devices: IDevice[];
  sensors: ISensor[];
  readings: IReading[];
}

const db: IDb = {
  devices: [
    {
      id: 1,
      name: 'Haapsalu kodu',
      placeId: 1,
    },
  ],
  sensors: [
    {
      id: 1,
      name: 'Veranda',
      type: 'temperature',
      units: 'C',
      deviceId: 1,
    },
    {
      id: 2,
      name: 'Pööning',
      type: 'temperature',
      units: 'C',
      deviceId: 1,
    },
  ],
  readings: [

  ],
};

export default db;
