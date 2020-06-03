import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './RegisterJumbotron.css'

export const RegisterJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="registerJumbotron">
      <div className="registerOverlay"></div>
      <Container className="registerContainer">
        <h1 className="jumboText">Register</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

