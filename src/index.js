import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Events from './components/Events'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import About from './components/About'
import Repo from './components/Repo'
import Home from './components/Home'
import Past from './components/Past'
import Contact from './components/Contact'

render ((
<Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/about" component={About} >
        <Route path="/about/:userName/:repoName" component={Contact}/>
      </Route>
      <Route path="/events" component={Events} >
        <Route path="/events/:userName/:repoName" component={Past}/>
      </Route>
    </Route>
</Router>


), document.getElementById('root'));
