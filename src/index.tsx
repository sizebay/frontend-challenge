import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


import './index.css'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const container = document.getElementById('szb-app-root');
if (container) {
  const root = createRoot(container);
  root.render(<AppContainer />)
} else {
  console.error("Element with id 'szb-app-root' not found.");
}
 
