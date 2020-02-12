import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CSTCJumbotron.css'

export const CSTCJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="CSTCJumbotron">
      <div className="CSTCOverlay"></div>
      <Container>
        <h1 className="jumboText">Computer Science Teaching Certification</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)