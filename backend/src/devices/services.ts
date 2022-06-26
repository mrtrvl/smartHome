/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IDevice from './interfaces';
import db from '../db';

const devicesService: any = {};

devicesService.getAll = (): IDevice[] => db.devices;

devicesService.getById = (id: number) => {
  const device = db.devices.find((element) => element.id === id);
  return device;
};

devicesService.getByPlaceId = (placeId: number): IDevice[] | undefined => {
  const placeDevices = db.devices.filter((element) => element.placeId === placeId);
  return placeDevices;
};

export default devicesService;
