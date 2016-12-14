import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Home from './Home'



export default class App extends React.Component {
  render () {
    console.log('inside app component');
    return (
      <div>
        <Header />
          <hr />
          <div>
            <div className='col-sm-9'>
              {this.props.children || <Home/>}
            </div>
              <Sidebar />
              <hr />
              <Footer />
            </div>
      </div>

    );
  }
}
