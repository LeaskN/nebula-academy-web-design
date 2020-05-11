import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


function Popup() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>COVID-19 UPDATE</Modal.Title>
        </Modal.Header>
        <p style={{padding: "0 10px 0 10px"}}>Due to the global COVID-19 outbreak, all Teacher Professional Development courses are being offered online.</p>
        <Modal.Footer>
            <Button variant="secondary" href="/programs">
                Course Details
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;