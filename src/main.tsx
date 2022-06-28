import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { TasksContextProvider } from './contexts/TasksContext'
import { GlobalStyle } from './globalStyles/globalStyles'
import { theme } from './globalStyles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme} >
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
