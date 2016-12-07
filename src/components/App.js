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
        <div className='col-sm-8'>

        {this.props.children || <Home/>}
        </div>
          <div>
            <Sidebar />
          </div>
          <Footer />
      </div>
    );
  }
}
