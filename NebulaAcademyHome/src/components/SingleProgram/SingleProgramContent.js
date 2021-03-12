import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./SingleProgramContent.css";

class SingleProgramContent extends Component {
  render() {
    const {
      title,
      about,
      highlights,
      expectations,
      timeline,
      cost,
      highlights2,
      technologies,
      certifications,
      outcomes,
      verifications,
    } = this.props.data;
    return (
      <div className="ProgramPage">
        <Row>
          <Col className="ProgramInfo">
            <h5>Program: {title}</h5>
            <h5>About:</h5>
            <p> {about}</p>
            <h5>Program Highlights:</h5>
            <p>{highlights}</p>
            <h5>Expectations:</h5>
            <p>{expectations}</p>
            <h5>Timeline:</h5>
            <p>{timeline}</p>
            <h5>Cost:</h5>
            <p>{cost}</p>
          </Col>

          <Col className="RightPanel">
            <Col className="TopCard">
              <h5>Highlights:</h5>
              <p>{highlights2}</p>
            </Col>
            <Col className="BottomCard">
              <h5>Technologies:</h5>
              <p>{technologies}</p>
              <h5>Certifications:</h5>
              <p>{certifications}</p>
              <h5>Outcomes:</h5>
              <p>{outcomes}</p>
              <h5>Industry Verifications</h5>
              <p>{verifications}</p>
            </Col>
          </Col>
        </Row>
        {/* <div>
          <Button className="ApplyButton">Apply Now</Button>
        </div> */}
      </div>
    );
  }
}

export default SingleProgramContent;
