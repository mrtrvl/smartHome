/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express, { Request, Response } from 'express';
import cors from 'cors';
import devicesController from './devices/controllers';
import placesController from './places/controllers';
import sensorsController from './sensors/controllers';
import readingsController from './readings/controllers';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log(req.url);
  res.status(200).json({
    success: true,
    data: 'Alive',
  });
});

app.get('/places', placesController.getAll);
app.get('/places/:id', placesController.getById);

app.post('/readings', readingsController.add);
app.get('/readings', readingsController.getaAll);

app.post('/devices/input', devicesController.input);
app.get('/devices', devicesController.getAll);
app.get('/devices/:id', devicesController.getById);

app.get('/sensors', sensorsController.getAll);
app.get('/sensors/:id/readings', sensorsController.getReadings);

export default app;
