import React from 'react'
// import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <ul>
          <li><NavLink to="/about/band/Contact">Contact us</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
