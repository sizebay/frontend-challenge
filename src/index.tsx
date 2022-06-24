import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { AllTodosProvider } from './Contexts/AllTodos'
import { GlobalStyle } from './GlobaStyles/globalStyles'
import { theme } from './GlobaStyles/theme'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AllTodosProvider>
          <GlobalStyle />
          <App />
        </AllTodosProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
