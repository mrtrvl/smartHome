import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from '@mantine/core';
const baseUrl = 'http://localhost:3200';

function Readings() {
  const [readings, setReadings] = useState();
  const getReadings = async () => {
    try {
      const response = await axios.get(`${baseUrl}/readings`);
      const data = response.data.data;
      const rows = data.map((row: any) => (
        <tr key={row.date}>
          <td>{row.sensorId}</td>
          <td>{row.reading}</td>
          <td>{row.date}</td>
        </tr>
      ));
      setReadings(rows);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getReadings();
  }, []);

  return (
    <div className="App">
      <h1>Andurid</h1>
      <Table sx={{ minWidth: 700 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Lugem</th>
            <th>Kuupäev</th>
          </tr>
        </thead>
        <tbody>{readings}</tbody>
      </Table>
      <Button onClick={ getReadings }>Laadi lugemid</Button>
    </div>
  );
}

export default Readings;
