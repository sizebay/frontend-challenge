import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import RootProvider  from './Hooks/useRootContext.js';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    <RootProvider>
    <App />
    </RootProvider>
  </React.StrictMode>
);
