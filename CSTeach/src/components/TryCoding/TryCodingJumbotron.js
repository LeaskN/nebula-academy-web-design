import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './TryCodingJumbotron.css'

export const TryCodingJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="tryCodingJumbo">
      <div className="tryCodingOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText">Try Coding!</h1>
        <p>Our <b>Try Coding</b> events are one workshops that introduce you to the basics of programming. In these sessions you will follow along with an instructor to create something simple yet exciting!</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 