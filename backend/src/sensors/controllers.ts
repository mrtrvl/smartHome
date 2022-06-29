/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import devicesService from '../devices/services';
import placesService from '../places/services';
import readingService from '../readings/services';
import sensorsService from './services';

const sensorsController: any = {};

sensorsController.getAll = (req: Request, res: Response) => {
  const sensors = sensorsService.getAll();
  return res.status(200).json({
    success: true,
    data: sensors,
  });
};

sensorsController.getReadings = async (req: Request, res: Response) => {
  const sensorId = Number(req.params.id);
  const sensor = await sensorsService.getById(sensorId);
  const device = await devicesService.getById(sensor.deviceId);
  const place = await placesService.getById(device.placeId);
  const readings = await readingService.getBySensorId(sensorId);
  return res.status(200).json({
    success: true,
    data: {
      place,
      device,
      readings,
    },
  });
};

export default sensorsController;
