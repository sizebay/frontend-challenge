import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TasksProvider } from './context/tasks.context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
