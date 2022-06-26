/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import ISensor from './interfaces';
import db from '../db';

const sensorsService: any = {};

sensorsService.getAll = (): ISensor[] => db.sensors;

sensorsService.getById = async (id: number): Promise<ISensor | undefined> => {
  const sensor = await db.sensors.find((element) => element.id === id);
  return sensor;
};

sensorsService.getByDeviceId = (deviceId: number): ISensor[] | undefined => {
  const deviceSensors = db.sensors.filter((element) => element.deviceId === deviceId);
  return deviceSensors;
};

export default sensorsService;
