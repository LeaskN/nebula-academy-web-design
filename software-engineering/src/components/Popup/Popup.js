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
        console.log(res, "res")
        updatePrograms(res);
      })
      .catch(err => {
        console.log("Error retrieving cohort information: " + err)
        handleClose();
      })
    }
  }, [show]);

  const renderCohortDetails = () => {
    try{
      return buildCohortDetails()
    } catch (e){
      console.log("Error caught: " + e);
    }
  }

  const buildCohortDetails = () => {
    return programs.map((cohort, key) => {
      if(cohort.isActive && cohort.name[0] === "V"){
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
      return null
    });
  }

  function parseCohortStr(cohort){
      const [duration] = /[0-9] Month/i.exec(cohort.name);
      const [fullOrPartTime] = /Full time|Part time/i.exec(cohort.name);
      const [rawStartDate] = /\w{3} \d* \d{4}/i.exec(new Date(cohort.startDate));
      const month = createFullMonthStr(rawStartDate);
      const day = /\d{2}|\d{1}/.exec(rawStartDate);
      const year = /\d{4}/.exec(rawStartDate);
      const startDate = `${month} ${day}, ${year}`;
      return [duration, fullOrPartTime, startDate];
  }

  function createFullMonthStr(str){
    const fullMonthNames = ["January", "February", "March", "April", 
      "May", "June", "July", "August", "September", "October", "December"];
    const startDate = fullMonthNames.filter(month => month.includes(/\w{3}/i.exec(str)[0]))[0];
    return startDate;
  }

  return (
    <Modal className="popupModal" show={show} onHide={handleClose}>
      <Modal.Header className="popupHeader" closeButton>
        <Modal.Title className="popupTitle">New Courses!</Modal.Title>
      </Modal.Header>
      {programs ? renderCohortDetails() : <></>}
      <Modal.Footer className="popupFooter">
        <Button className="popupButton" variant="secondary" href="/program">
          Course Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;