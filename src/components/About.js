import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    const wellStyles = {maxWidth: 200, margin: '0 auto 10px' };
    return (
      <div>
        <h1>About Us</h1>

          <div className="well" style={wellStyles}>
           <Button bsSize="large" block><NavLink to="/about/band/Contact">Contact us</NavLink></Button>
         </div>
        {this.props.children}
      </div>
    )
  }
})
