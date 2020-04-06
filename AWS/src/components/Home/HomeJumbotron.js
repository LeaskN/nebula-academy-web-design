import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">Amazon Web Services Academy Program</h1>
        <p>Earn your certification with an Accreditied AWS training provider</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 