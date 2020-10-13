import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <Container>
      <h1 className="homeJumboHeader contentCentered">Building Skills for the Modern Workforce</h1>
      <h2 className="homeJumboSmallerHeader contentCentered">Learn How To Learn</h2>
        <p><i>Equipping all learners of all ages with the necessary skills to address the skills gap in today's modern workforce.</i></p>
      </Container>
    </Jumbotron>
  </React.Fragment>
);