import React from "react";
import { Col, Button,  } from "react-bootstrap";

export const WorkforceProgramSection = (props) => {
  const { data } = props;
  return (
    <Col
      className="WorkforceDevelopmentUrlCard"
      style={{ borderColor: "#ff9900" }}
    >
      <h1>AWS</h1>
      {this.createAWSSlides()}
      <div id="spacer"></div>
      <Button
        className="bottom"
        href="https://aws.nebulaacademy.com"
        target="blank"
        variant="warning"
      >
        AWS
      </Button>
    </Col>
  );
};
