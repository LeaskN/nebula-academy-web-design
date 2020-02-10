import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './WorkforceDevelopmentJumbotron.css'

export const WorkforceDevelopmentJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="WorkforceDevelopmentJumbo noMargin">
      <Container>
      <h1 className="WorkforceDevelopmentJumboHeader contentCentered">Workforce Development</h1>
      <p>Nebula Academy preserves to create social impact to support today's modern workforce, a workforce continuously disrupted by technology innovation. We work within schools and businesses, providing professional development and integrating computer science and technological skills.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)