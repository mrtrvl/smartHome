import React from 'react';
import Places from './Places';
import Devices from './Devices';
import Sensors from './Sensors';
import Readings from './Readings';

function Dashboard() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Places />
      <Devices />
      <Sensors />
      <Readings />
    </div>
  );
}

export default Dashboard;
