import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './SBLSJumbotron.css'

export const SBLSJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="SBLSJumbotron">
      <div className="SBLSOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText">Science Behind Learning</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)