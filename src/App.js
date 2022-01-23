import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  );
}
