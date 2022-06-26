/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import devicesService from './services';
import sensorsService from '../sensors/services';

const devicesController: any = {};

devicesController.getAll = (req: Request, res: Response) => {
  const devices = devicesService.getAll();
  return res.status(200).json({
    success: true,
    data: devices,
  });
};

devicesController.getById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const device = devicesService.getById(id);
  const deviceSensors = sensorsService.getByDeviceId(id);
  return res.status(200).json({
    success: true,
    data: {
      ...device,
      sensors: deviceSensors,
    },
  });
};

devicesController.input = (req: Request, res: Response) => {
  const input = req.body;
  return res.status(200).json({
    success: true,
    data: input,
  });
};

export default devicesController;
