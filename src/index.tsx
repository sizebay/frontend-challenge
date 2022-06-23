import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const AppContainer = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
