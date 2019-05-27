import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import AuthOrApp from './authOrApp'
import Cliente from '../cliente/cliente'
import ClienteForm from '../cliente/clienteForm'

import App from './app'

export default props => (

  <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Cliente} />
            <Route path='novo' component={ClienteForm} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)