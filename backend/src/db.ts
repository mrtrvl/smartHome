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
      name: 'Haapsalu veranda',
      placeId: 1,
    },
    {
      id: 2,
      name: 'Haapsalu pööning',
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
    },
    {
      id: 2,
      name: 'Temperatuur',
      type: 'temperature',
      units: 'C',
      deviceId: 1,
    },
  ],
  readings: [

  ],
};

export default db;
