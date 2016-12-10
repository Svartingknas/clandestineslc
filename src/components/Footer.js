import React from 'react';
import { Link } from 'react-router'
import Styles from './Styles.css'

export default class Footer extends React.Component {
  render () {
    return(
      <div>
        <footer className="container-fluid">
          <div className="fb-like" data-href="https://clandestineslc.com/" data-layout="button" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
          <Link to="/"> 🏠 </Link>
          <Link to="/about/band/Contact"> ✉️ </Link>
        </footer>

      </div>
    );
  }
}
