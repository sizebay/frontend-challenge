import React from 'react'
import logo from './logo.svg'

import { Container, Header, Logo } from './styles'

function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Sizebay logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://sizebay.com" target="_blank" rel="noopener noreferrer">
          Learn about Sizebay
        </a>
      </Header>
    </Container>
  )
}

export default App
