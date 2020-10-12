import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './Popup.css'; 

function Popup() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Modal className="popupModal" show={show} onHide={handleClose}>
      <Modal.Header className="popupHeader" closeButton>
        <Modal.Title className="popupTitle">New Courses!</Modal.Title>
      </Modal.Header>
      <p className="popupText" >3 Month <span>Full-Time</span> or 6 Month <span>Part-Time</span></p>
      <p className="popupText" >Cohorts Beginning <span>September 14th</span>!</p>
      <Modal.Footer className="popupFooter">
          <Button className="popupButton" variant="secondary" href="/program">
              Course Details
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;