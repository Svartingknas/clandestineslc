import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
// import About from './About'
// import { Link, IndexLink } from 'react-router'
import Home from './Home'
// import NavLink from './NavLink'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className='col-sm-6'>
          {this.props.children || <Home/>}
        </div>
          <Sidebar />
          <Footer />
      </div>

    );
  }
}
