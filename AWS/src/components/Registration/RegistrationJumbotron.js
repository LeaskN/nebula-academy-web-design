import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './RegistrationJumbotron.css'

export const RegistrationJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="registrationJumbotron">
      <Container>
        <h1 className="jumboText">Registration</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

