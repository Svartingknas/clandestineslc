import React from 'react'
// import { Link } from 'react-router'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
    <div>
      <h2>Events</h2>
        <ul>
          <li><NavLink to="/events/band/upcoming">Upcoming Events</NavLink></li>
          <li><NavLink to="/events/band/Past">Past Events</NavLink></li>
        </ul>
        {this.props.children}
    </div>
  )
  }
})
