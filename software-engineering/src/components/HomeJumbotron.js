import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <div>
    <Jumbotron className="homeJumbo">
      <div className="overlay"></div>
      <Container>
        <h1 >Hello, world!</h1>
      </Container>
    </Jumbotron>
  </div>
)

