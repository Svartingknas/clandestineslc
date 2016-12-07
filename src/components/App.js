import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import About from './About'
import { Link, IndexLink } from 'react-router'
import Home from './Home'
import NavLink from './NavLink'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/About">About Us</NavLink></li>
          <li><NavLink to="/Events">Events</NavLink></li>
          <li><NavLink to="/Tickets">Tickets</NavLink></li>
        </ul>
        {this.props.children || <Home/>}
          <Sidebar />
          <Footer />
      </div>
    );
  }
}
