import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/singIn/index'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={SignIn} />
    <Route path='/signup' component={() => <h1>Ola mundo</h1>} />
  </Switch>
)

export default Routes
