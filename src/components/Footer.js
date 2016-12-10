import React from 'react';
import { Link } from 'react-router'
import Styles from './Styles.css'

export default class Footer extends React.Component {
  render () {
    return(
      <div>
        <footer className="container-fluid">
          <Link to="/"> 🏠 </Link>
          <Link to="/about/band/Contact"> ✉️ </Link>
          <div className="fb-share-button" data-href="http://localhost:3000/game" id="fbshare" data-layout="button_count"></div>
        </footer>

      </div>
    );
  }
}
