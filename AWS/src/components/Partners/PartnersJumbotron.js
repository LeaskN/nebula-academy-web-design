import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './PartnersJumbotron.css';

export const PartnersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="partnersJumbotron">
      <div className="AWSLogo"></div>
      <div className="awsOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText partnerJumboText">Partners</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)