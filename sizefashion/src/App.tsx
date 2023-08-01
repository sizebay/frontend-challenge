import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App


type Props = {
  children?: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
