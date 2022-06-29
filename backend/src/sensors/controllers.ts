/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
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
  const readings = await readingService.getBySensorId(sensorId);
  return res.status(200).json({
    success: true,
    data: readings,
  });
};

export default sensorsController;
