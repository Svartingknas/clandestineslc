import React from 'react';
import { Link } from 'react-router'
import footer from './Styles.css'
import { Glyphicon } from 'react-bootstrap'


export default class Footer extends React.Component {
  render () {
    return(
      <div>

        <footer>
          <Link to="/"><Glyphicon glyph="glyphicon glyphicon-home" /> </Link>
          <Link to="/about/band/Contact"><Glyphicon glyph="glyphicon glyphicon-envelope" /> </Link>
          <div><div className="fb-like" text-align="right" data-href="https://clandestineslc.com/" data-layout="button" data-action="recommend" data-size="small" data-show-faces="false" data-share="true"></div></div>
        </footer>
          <hr />
      </div>
    );
  }
}
