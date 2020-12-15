import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './Popup.css'; 

function Popup(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const produceButtons = () => {
    if(props.buttons && Array.isArray(props.buttons)){
      return props.buttons.map((btn,idx) => (
        <Button variant="outline-primary" key={idx} href={btn.link} target="_blank">{btn.title}</Button>
      ))
    } 
    return null;
  }
  
  return (
    <Modal size="lg" className="popupModal" centered show={show} onHide={handleClose}>  
      <Modal.Header className="popupHeader" closeButton>
        <Modal.Title className="popupTitle">New Courses</Modal.Title>
      </Modal.Header>
      <Modal.Body className="centerModalText">
        {props.content}
      </Modal.Body>
      <Modal.Footer className="popupFooter">
        { produceButtons() }
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;