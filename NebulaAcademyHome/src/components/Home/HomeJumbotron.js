import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin">
      {/* <div className="homeOverlay"></div> */}
      <Container>
      <h1 className="contentCentered">Computer Science Growth System</h1>
      <h2 className="contentCentered">We cover K to Career</h2>
        <p>Equipping all learners of all ages with the necessary skills to address the computer science gap.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 