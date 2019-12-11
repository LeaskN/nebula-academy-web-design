import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './PartnersJumbotron.css'

export const PartnersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="PartnersJumbotron">
      <div className="partnersOverlay"></div>
      <Container>
        <h1 className="jumboText">Partners</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)