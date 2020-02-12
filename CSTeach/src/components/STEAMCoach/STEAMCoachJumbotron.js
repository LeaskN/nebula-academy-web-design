import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './STEAMCoachJumbotron.css'

export const STEAMCoachJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="STEAMCoachJumbotron">
      <div className="STEAMCoachOverlay"></div>
      <Container>
        <h1 className="jumboText">Computer Science Teaching Certification</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)