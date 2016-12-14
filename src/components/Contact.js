import React from 'react'
// import $ from 'jquery'
import {closeStyle} from 'simple-react-modal'

export default class Contact extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }


  render(){
    return (
      <div>
        <a onClick={this.show.bind(this)}>xsdhjflkasdhfkldsajlfjasdlfjlsad</a>
        <Modal
        className="modal-container"
        containerClassName="\"
        show={this.state.show}>

       <a style={closeStyle} onClick={this.close.bind(this)}>X</a>

      <div className="inside-modal">
        <h4>Communicate with us via E-mail</h4>
          <form action="mailto:someone@example.com" method="post" encType="text/plain"><br/>Name:<br/>
            <input type="text" name="name" /> <br/>E-mail:<br/>
            <input type="text" name="mail" /> <br/>Comment:<br/>
            <input type="text" name="comment" size="50" /><br/>
            <input type="submit" value="Send" />
            <input type="reset" value="Reset" />
          </form>
      </div>
      </Modal>
      </div>
    )
  }
}
