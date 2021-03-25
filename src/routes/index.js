import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { BASE_ROUTE, SPIN_AND_WIN_ROUTE } from '../models/routes';
import NoPage from '../components/NoPage';
import SpinAndWin from '../modules/SpinAndWin/pages/SpinAndWin';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={BASE_ROUTE} exact component={SpinAndWin} />
        <Route path={SPIN_AND_WIN_ROUTE} exact component={SpinAndWin} />
        <Route component={NoPage} />
        <Redirect from="//*" to="/*" />
      </Switch>
    )
  }
}

export default Routes;