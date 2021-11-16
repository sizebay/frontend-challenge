import React from 'react';

import { ItemProvider } from '../../contexts/ItemProvider';

import Header from '../Header';
import SearchBox from '../SearchBox';
import ItemBox from '../ItemBox';

export default function Layout() {
  return (
    <ItemProvider>
      <Header />
      <SearchBox />
      <ItemBox />
    </ItemProvider>
  );
}
