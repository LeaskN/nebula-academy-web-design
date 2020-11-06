import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
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
    return programs.filter(option => option.name.toLowerCase().includes('bootcamp') && option.isActive);
  }
  
  const formatDetailsIntoJSX = (cohort, key) => {
    const [duration, fullOrPartTime, startDate] = parseCohortStr(cohort);
    return (
      <p key={key} className="popupText">
        {duration.toLowerCase().split(' ').join('-')}
        <span> {fullOrPartTime.toLowerCase().split(' ').join('-')} </span>
        cohort begins 
        <span> {startDate}</span>
      </p>
    )
  }

  const parseCohortStr = (cohort) => {
      const [duration] = /[0-9] Month/i.exec(cohort.name);
      const [fullOrPartTime] = /Full time|Part time/i.exec(cohort.name);
      const [rawStartDate] = /\w{3} \d* \d{4}/i.exec(new Date(cohort.startDate + "EST"));
      const startDate = parseDateStr(rawStartDate);
      return [duration, fullOrPartTime, startDate];
  }

  const parseDateStr = (str) => {
    const fullMonthNames = ["January", "February", "March", "April", 
      "May", "June", "July", "August", "September", "October", "December"];
    const [, month, day, year] = /(\w{3}) (\d{2}|\d{1}) (\d{4})/.exec(str);
    const fullMonth = fullMonthNames.filter(mo => mo.includes(month));
    const startDate = `${fullMonth} ${day}, ${year}`;
    return startDate;
  }

  return (
    <Modal className="popupModal" show={show} onHide={handleClose}>
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