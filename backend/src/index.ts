/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import app from './app';

const port = 3200;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
