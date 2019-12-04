import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Long Island Coding Bootcamp</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 