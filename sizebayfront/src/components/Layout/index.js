import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ItemProvider } from '../../contexts/item';

import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../../Routes';

export default function Layout() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes />
      </BrowserRouter>
    </ItemProvider>
  );
}
