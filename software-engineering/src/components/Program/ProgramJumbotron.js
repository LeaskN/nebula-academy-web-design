import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ProgramJumbotron.css'

export const ProgramJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="programJumbotron">
      <div className="programOverlay"></div>
      <Container>
        <h1>Program</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

