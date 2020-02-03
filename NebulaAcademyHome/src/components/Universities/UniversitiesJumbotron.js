import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './UniversitiesJumbotron.css'

export const UniversitiesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin">
      <Container>
      <h1 className="contentCentered">Universities</h1>
      <p>Universities Description</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)