/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { IReading, INewReading } from './interfaces';
import db from '../db';

const readingService: any = {};

readingService.getBySensorId = async (sensorId: number): Promise<IReading[]> => {
  const sensorsReadings = await db.readings.filter((element) => element.sensorId === sensorId);
  return sensorsReadings;
};

readingService.getAll = async (): Promise<IReading[]> => {
  const { readings } = db;
  return readings;
};

readingService.add = async (reading: INewReading): Promise<boolean> => {
  const newReading: IReading = {
    ...reading,
    date: new Date(),
  };
  db.readings.push(newReading);
  return true;
};

export default readingService;
