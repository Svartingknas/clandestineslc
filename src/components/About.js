import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About Us</h2>
        <ul>
          <li><NavLink to="/about/band/personalbiography">Personal Biographies</NavLink></li>
          <li><NavLink to="/about/band/pictures">Band Pictures</NavLink></li>
          <li><NavLink to="/about/band/contactus">Contact us</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
