import React from 'react';
import Dashboard from './comopnents/Dashboard';
import { NavbarSimpleColored } from './comopnents/Navbar';
import { Container, SimpleGrid } from '@mantine/core';

function App() {
  return (
    <Container my="md">
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <NavbarSimpleColored />
      <Dashboard />
    </SimpleGrid>
  </Container>
  );
}

export default App;
