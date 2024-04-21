import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'
import { defaultTheme } from 'styles/theme/defaultTheme'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
          <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
