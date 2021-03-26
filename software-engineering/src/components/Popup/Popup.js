import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { parseCohortStr } from '../../helperFunctions/helperFunctions';
import './Popup.css'; 

function Popup() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [programs, updatePrograms] = useState();

  useEffect(() => {
    if(show){
      fetch(`https://d9nuj9xdv4try.cloudfront.net/dev2/campaigns`)
      .then(res => res.json())
      .then(res => {
        updatePrograms(res);
      })
      .catch(err => {
        console.log("Error retrieving cohort information: " + err)
        handleClose();
      })
    }
  }, [show]);

  const cohortDetailsJSX = () => {
    try {
      return filterBootCamps().map((cohort, key) => formatDetailsIntoJSX(cohort, key));
    } catch (e){
      console.log("Error caught: " + e);
    }
  }

  const filterBootCamps = () => {
    console.log(programs)
    programs.sort((a, b) =>  new Date(a.startDate) - new Date(b.startDate) )
    return programs.filter(option => option.name.toLowerCase().includes('bootcamp') && option.isActive);
  }
  
  const formatDetailsIntoJSX = (cohort, key) => {
    const { cohortName, duration, fullOrPartTime, startDate } = parseCohortStr(cohort);
    return (
      <div className="cohort-details" key={key}>
        <h6>{cohortName}</h6>
        <p className="popupText">
          {duration.toLowerCase().split(' ').join('-')}
          <span> {fullOrPartTime.toLowerCase().split(' ').join('-')} </span>
          begins 
          <span> {startDate}</span>
        </p>  
      </div>
    )
  }
  return (
    <Modal aria-labelledby="contained-modal-title-vcenter" centered className="popupModal" show={show} onHide={handleClose}>
      <Modal.Header className="popupHeader" closeButton>
        <Modal.Title className="popupTitle">New Courses!</Modal.Title>
      </Modal.Header>
      {programs ? cohortDetailsJSX() : <></>}
      <Modal.Footer className="popupFooter">
        <Button className="popupButton" variant="secondary" href="/program">
          Course Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;