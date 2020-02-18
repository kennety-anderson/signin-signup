import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/singIn/index';
import SignUp from './pages/signUp/index';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
