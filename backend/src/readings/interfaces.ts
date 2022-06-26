export interface INewReading {
  sensorId: number;
  reading: number;
}

export interface IReading extends INewReading {
  date: Date;
}
