/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Url: ${req.url}, time: ${new Date()}, from: ${req.headers.host}`);
  next();
};

export default logger;
