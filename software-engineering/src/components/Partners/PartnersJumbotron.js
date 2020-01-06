import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './PartnersJumbotron.css'

export const PartnersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="partnersJumbotron">
      <Container>
        <h1 className="jumboText">Partners</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)