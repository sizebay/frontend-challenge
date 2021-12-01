import React from 'react';

import { Container } from './styles';

import SearchBox from '../SearchBox';
import Filters from '../Filters';

export default function Navigation() {
  return (
    <Container>
      <Filters />
      <SearchBox />
    </Container>
  );
}
