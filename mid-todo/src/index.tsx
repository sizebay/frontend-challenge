import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { StyleSheetManager } from 'styled-components';

import './index.css'

ReactDOM.createRoot(document.getElementById('szb-app-root') as HTMLElement).render(
  <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith('shouldshow')}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleSheetManager>
);