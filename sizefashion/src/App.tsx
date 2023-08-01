import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'

import { 
  Error,
  Products,
  SingleProduct
} from './pages'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route exact path='/products/:slug' children={<SingleProduct />} />
          <Route path='*'>
            <Error />
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
      <Footer />
    </>
  )
}
