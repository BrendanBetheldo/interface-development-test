
import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class Trigger extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: props.modal };
    }
    componentWillReceiveProps(nextProps){
    	if(this.state.show!==nextProps.modal){
      	this.setState({show: nextProps.modal})
      }
    }
    render(){
        let close = () => this.setState({ show: false});
        return (
      <div className="modal-container">
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
        <Modal.Header closeButton>         
        </Modal.Header>
        <Modal.Body>
                    
        </Modal.Body>
      </Modal>
      </div>
    );
    }
}