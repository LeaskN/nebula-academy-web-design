import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CareersJumbotron.css'

export const CareersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="careersJumbotron">
      <div className="careersOverlay"></div>
      <Container>
        <h1 className="jumboText">Careers</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

