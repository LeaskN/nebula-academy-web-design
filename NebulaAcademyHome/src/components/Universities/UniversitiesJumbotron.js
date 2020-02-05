import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './UniversitiesJumbotron.css'

export const UniversitiesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin UniversitiesJumbo">
      <Container>
      <h1 className="contentCentered">Universities</h1>
      <p>Nebula Academy bridges the gap between Academia and Industry. We partner with universities to remain on the cutting edge of higher education.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)