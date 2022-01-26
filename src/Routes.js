import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Done from './pages/Done';
import Pending from './pages/Pending';
import PageNotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/done" component={Done} />
      <Route path="/pending" component={Pending} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
