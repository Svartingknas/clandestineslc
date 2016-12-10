import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Home from './Home'


export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className='col-sm-8'>
          {this.props.children || <Home/>}
        </div>
          <Sidebar />
          <Footer />
      </div>

    );
  }
}
