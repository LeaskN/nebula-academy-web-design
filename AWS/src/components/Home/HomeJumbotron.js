import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">Amazon Web Services Academy Program</h1>
        <p>A 5 day, in person, AWS academy in Syosset, NY.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 