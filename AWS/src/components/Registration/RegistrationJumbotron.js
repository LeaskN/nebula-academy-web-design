import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './RegistrationJumbotron.css'

export const RegistrationJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="registrationJumbotron">
      <div className="AWSLogo"></div>
      <div className="registrationOverlay"></div> 
      <Container className="jumboContainer">
        <h1 className="jumboText registrationJumboText">Registration</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

