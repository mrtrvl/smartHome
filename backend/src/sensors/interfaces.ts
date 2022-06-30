/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { IReading } from '../readings/interfaces';

interface ISensor {
  id: number;
  name: string;
  type: string;
  units: string;
  deviceId: number;
  readings: IReading[];
}

export default ISensor;
