import React from 'react';

import { ItemProvider } from '../../contexts/ItemProvider';

import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../../Routes';

import { MainContainer } from './styles';

export default function Layout() {
  return (
    <MainContainer>
      <ItemProvider>
        <Header />
        <Navigation />
        <Routes />
      </ItemProvider>
    </MainContainer>
  );
}
