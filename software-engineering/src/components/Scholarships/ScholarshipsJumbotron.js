import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ScholarshipsJumbotron.css'

export const ScholarshipsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="ScholarshipsJumbotron">
      <div className="outcomesOverlay"></div>
      <Container>
        <h1>Outcomes</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)