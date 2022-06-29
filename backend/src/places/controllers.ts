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

placesController.getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const place = await placesService.getById(id);
    if (!place) throw new Error(`No place found with id: ${id}`);
    const placeDevices = await devicesService.getByPlaceId(id);
    return res.status(200).json({
      success: true,
      data: {
        place,
        devices: placeDevices,
      },
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export default placesController;
