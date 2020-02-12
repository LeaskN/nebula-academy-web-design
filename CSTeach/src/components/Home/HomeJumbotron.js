import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">Software Engineering Bootcamp</h1>
        <p>A 6 month, in person, full-time software engineering school in Syosset, NY.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 