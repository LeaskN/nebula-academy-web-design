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
        <p style={{padding: "0 10px 0 10px"}}>Due to the global COVID-19 outbreak, we are providing virtual AWS Training discounts.</p>
        <p style={{padding: "0 10px 0 10px"}}>Our virtual AWS courses have been reduced to $99.</p>
        <Modal.Footer>
            <Button variant="secondary" href="/courses">
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