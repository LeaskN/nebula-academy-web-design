import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ModalBody from 'react-bootstrap/ModalBody';
import './AutoModal.css'; 

function AutoModal(props) {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <span className="modalLink" onClick={handleShow}>{props.children}</span>
        <Modal size="lg" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Payment Details</Modal.Title>
            </Modal.Header>
            <ModalBody bsPrefix="modalAdjustments">{props.content}</ModalBody>
        </Modal>
    </>
  );
}

export default AutoModal;