import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './OutcomesJumbotron.css'

export const OutcomesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="outcomesJumbotron">
      <div className="outcomesOverlay"></div>
      <Container>
        <h1 className="jumboText">Outcomes</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

