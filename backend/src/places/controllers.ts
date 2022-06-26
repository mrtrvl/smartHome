/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import devicesService from '../devices/services';
import placesService from './services';

const placesController: any = {};

placesController.getAll = (req: Request, res: Response) => {
  const places = placesService.getAll();
  return res.status(200).json({
    success: true,
    data: places,
  });
};

placesController.getById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const place = placesService.getById(id);
  const placeDevices = devicesService.getByPlaceId(id);
  return res.status(200).json({
    success: true,
    data: {
      ...place,
      devices: placeDevices,
    },
  });
};

export default placesController;
