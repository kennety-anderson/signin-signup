import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth/authentication';

import SignIn from './pages/singIn/index';
import SignUp from './pages/signUp/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/home" component={() => <h1>Home</h1>} />
  </Switch>
);

export default Routes;
