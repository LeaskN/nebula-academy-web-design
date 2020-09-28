import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './OldOutcomesJumbotron.css'

export const OldOutcomesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="oldOutcomesJumbotron">
      <div className="oldOutcomesOverlay"></div>
      <Container>
        <h1 className="jumboText">Outcomes</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

