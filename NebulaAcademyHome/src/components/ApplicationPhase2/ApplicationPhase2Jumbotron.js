import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ApplicationPhase2Jumbotron.css'

export const ApplicationPhase2Jumbotron = () => (
  <React.Fragment>
    <Jumbotron className="ApplicationPhase2Jumbotron">
      <div className="ApplicationPhase2Overlay"></div>
      <Container>
        <h1 className="jumboText">Application Phase Two</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

