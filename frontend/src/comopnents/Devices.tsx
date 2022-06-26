import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from '@mantine/core';
const baseUrl = 'http://localhost:3200';

function Devices() {
  const [devices, setDevices] = useState();
  const getDevices = async () => {
    try {
      const response = await axios.get(`${baseUrl}/devices`);
      const data = response.data.data;
      const rows = data.map((row: any) => (
        <tr key={row.name}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.placeId}</td>
        </tr>
      ));
      setDevices(rows);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <div className="App">
      <h1>Seadmed</h1>
      <Table sx={{ minWidth: 700 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Aadress</th>
          </tr>
        </thead>
        <tbody>{devices}</tbody>
      </Table>
      <Button onClick={ getDevices }>Laadi seadmed</Button>
    </div>
  );
}

export default Devices;
