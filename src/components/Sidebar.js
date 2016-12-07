import React from 'react';
import Styles from './Styles.css';
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Sidebar extends React.Component {
  render (){
    return (
          <div className="col-sm-2 sidenav">
              <ul className="nav nav-pills nav-stacked">
                <h3 className="archive">Follow us on:</h3>
                  <li><NavLink to="/About">About Us</NavLink></li>
                  <li><NavLink to="/Events">Events</NavLink></li>
                  <li><NavLink to="/Tickets">Tickets</NavLink></li>
                  <li><NavLink to="/https://www.facebook.com/clandestineSLC/">Facebook page</NavLink></li>
              </ul>
            </div>
    );
  }
}
