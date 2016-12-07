import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import Events from './components/Events'
import Tickets from './components/Tickets'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'

render ((
<Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/events" component={Events} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/Sidebar" component={Sidebar} />
      <Route path="/Footer" component={Footer} />
    </Route>
</Router>
), document.getElementById('root'));
