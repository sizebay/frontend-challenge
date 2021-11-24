import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Done from './pages/Done';
import Pending from './pages/Pending';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/done" component={Done}/>
      <Route path="/pending" component={Pending}/>
    </BrowserRouter>
  );
}
