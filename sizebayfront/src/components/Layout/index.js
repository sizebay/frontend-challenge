import React from 'react';

import { ItemProvider } from '../../contexts/ItemProvider';

import Header from '../Header';
import SearchBox from '../SearchBox';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <ItemProvider>
      <Header />
      <SearchBox />
      <Routes />
    </ItemProvider>
  );
}
