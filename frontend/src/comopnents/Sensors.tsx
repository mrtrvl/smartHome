import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from '@mantine/core';
const baseUrl = 'http://localhost:3200';

function Sensors() {
  const [sensors, setSensors] = useState();
  const getSensors = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sensors`);
      const data = response.data.data;
      const rows = data.map((row: any) => (
        <tr key={row.name}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>{row.units}</td>
          <td>{row.deviceId}</td>
        </tr>
      ));
      setSensors(rows);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSensors();
  }, []);

  return (
    <div className="App">
      <h1>Andurid</h1>
      <Table sx={{ minWidth: 700 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Tüüp</th>
            <th>Ühikud</th>
            <th>Seadme ID</th>
          </tr>
        </thead>
        <tbody>{sensors}</tbody>
      </Table>
      <Button onClick={ getSensors }>Laadi andurid</Button>
    </div>
  );
}

export default Sensors;
