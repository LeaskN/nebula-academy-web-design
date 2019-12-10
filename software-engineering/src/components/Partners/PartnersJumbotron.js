import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './PartnersJumbotron.css'

export const PartnersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="PartnersJumbotron">
      <div className="outcomesOverlay"></div>
      <Container>
        <h1>Partners</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)