import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyle } from './GlobaStyles/globalStyles'
import { theme } from './GlobaStyles/theme'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
