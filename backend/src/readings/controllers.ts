/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import sensorsService from '../sensors/services';
import { INewReading } from './interfaces';
import readingsService from './services';

const readingsController: any = {};

readingsController.add = async (req: Request, res: Response) => {
  const readings: INewReading[] = req.body.sensors;
  readings.forEach(async (reading: INewReading) => {
    const sensor = await sensorsService.getById(reading.sensorId);
    console.log(`Sensors: ${sensor.name} reading: ${reading.reading}, time: ${new Date()}`);
    await readingsService.add(reading);
  });
  const action = { actuatorId: 1, state: false };
  return res.status(200).json(action);
};

readingsController.getaAll = async (req: Request, res: Response) => {
  const readings = await readingsService.getAll();
  return res.status(200).json({
    success: true,
    data: readings,
  });
};

export default readingsController;
