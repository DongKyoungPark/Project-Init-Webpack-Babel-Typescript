import { memo } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from '../config/History';

import { Main } from '../pages';

const Routes = memo(() => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Main} />

        <Redirect path='*' to='/' />
      </Switch>
    </Router>
  );
});

export default Routes;
