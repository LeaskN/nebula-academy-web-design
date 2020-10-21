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
      <p className="popupText" >3-month <span>Full-Time</span> Cohort Begins <span>February 1, 2021</span></p>
      <p className="popupText" >6-month <span>Part-Time</span> Cohort Begins <span>April 19, 2021</span></p>
      <Modal.Footer className="popupFooter">
          <Button className="popupButton" variant="secondary" href="/program">
              Course Details
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;