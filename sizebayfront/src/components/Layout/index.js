import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ItemProvider } from '../../contexts/ItemProvider';

import Header from '../Header';
import SearchBox from '../SearchBox';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <Header />
        <SearchBox />
        <Routes />
      </BrowserRouter>
    </ItemProvider>
  );
}
