import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText" >Accelerate Your Capacity to Teach and Offer Computer Science Programs</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 