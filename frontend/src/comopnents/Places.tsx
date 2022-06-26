import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from '@mantine/core';
const baseUrl = 'http://localhost:3200';

function Places() {
  const [places, setPlaces] = useState();
  const getPlaces = async () => {
    try {
      const response = await axios.get(`${baseUrl}/places`);
      const data = response.data.data;
      const rows = data.map((row: any) => (
        <tr key={row.name}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.address}</td>
        </tr>
      ));
      setPlaces(rows);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div className="App">
      <h1>Asukohad</h1>
      <Table sx={{ minWidth: 700 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Aadress</th>
          </tr>
        </thead>
        <tbody>{places}</tbody>
      </Table>
      <Button onClick={ getPlaces }>Laadi kohad uuesti</Button>
    </div>
  );
}

export default Places;
