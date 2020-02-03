import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './WorkforceDevelopmentJumbotron.css'

export const WorkforceDevelopmentJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin">
      <Container>
      <h1 className="contentCentered">WorkforceDevelopment</h1>
      <p>WorkforceDevelopment Description</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)