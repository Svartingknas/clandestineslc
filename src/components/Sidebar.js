import React from 'react';
import Styles from './Styles.css';
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'

export default class Sidebar extends React.Component {
  render (){
    return (
          <div className="col-sm-2 sidenav">
              <ul className="nav nav-pills nav-stacked">
                <h3 className="archive">Follow us on:</h3>
                  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                  <li><NavLink to="/About">About Us</NavLink></li>
                  <li><NavLink to="/Events">Events</NavLink></li>
                  <li><a href="https://www.residentadvisor.net/" target="_blank">Tickets</a></li>
                  <li><a href="https://www.facebook.com/clandestineSLC/" target="_blank">Facebook</a></li>
                  <li><a href="https://soundcloud.com/" target="_blank">Soundcloud</a></li>
              </ul>
            </div>
    );
  }
}
