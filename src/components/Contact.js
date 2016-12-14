import React from 'react'
import { Modal } from 'react-bootstrap'
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
      <div  >
        <a onClick={this.show.bind(this)}>xsdhjflkasdhfkldsajlfjasdlfjlsad</a>
        <Modal
        className="modal-container"
        containerClassName="\"
        show={this.state.show}>

       <a style={closeStyle} onClick={this.close.bind(this)}>X</a>



        <div className="container-fluid">

          <div className="page-header">
              <h1>Contact Us</h1>
          </div>

            <div className="well">Have a question or comment? Fill out the following information and we will get back to you as soon as possible.</div>

    <form className="form-horizontal" method="post" role="form">
    	<div className="form-group">
    		<label htmlFor="email" className="col-sm-2 control-label">E-mail</label>
    		<div className="col-sm-4">
    			<input type="email" className="form-control" id="email" name="email" placeholder="E-mail Address" required autoFocus />
    		</div>
    	</div>

    	<div className="form-group">
    		<label htmlFor="name" className="col-sm-2 control-label">Name</label>
    		<div className="col-sm-4">
    			<input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
    		</div>
    	</div>

    	<div className="form-group">
    		<label htmlFor="name" className="col-sm-2 control-label">Message</label>
    		<div className="col-sm-6">
    			<textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="5" required />
    		</div>
    	</div>

    	<div className="form-group">
    		<div className="col-sm-offset-2 col-sm-2">
    			<button type="submit" className="btn btn-primary">Send Message</button>
    		</div>
    	</div>
    </form>
    </div>

      </Modal>
      </div>
    )
  }
}
