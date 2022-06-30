/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { IReading, INewReading } from './interfaces';
import db from '../db';
import ISensor from '../sensors/interfaces';

const maxItemsInDatabase = 144; // 10 minute intervals in 24 hours

const readingsService: any = {};

readingsService.getBySensorId = async (sensorId: number): Promise<IReading[]> => {
  const sensorIndex = db.sensors.findIndex((sensor) => sensor.id === sensorId);
  const sensorsReadings = await db.sensors[sensorIndex]
    .readings.filter((element) => element.sensorId === sensorId);
  return sensorsReadings;
};

readingsService.getAll = async (): Promise<ISensor[]> => db.sensors;

readingsService.add = async (reading: INewReading): Promise<boolean> => {
  const newReading: IReading = {
    ...reading,
    date: new Date(),
  };
  const sensorIndex = db.sensors.findIndex((sensor) => sensor.id === reading.sensorId);
  db.sensors[sensorIndex].readings.push(newReading);
  if (db.sensors[sensorIndex].readings.length > maxItemsInDatabase) {
    db.sensors[sensorIndex].readings.shift();
  }
  return true;
};

export default readingsService;
