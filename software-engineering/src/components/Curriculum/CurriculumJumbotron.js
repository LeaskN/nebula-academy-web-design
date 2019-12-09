import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CurriculumJumbotron.css'

export const CurriculumJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="CurriculumJumbotron">
      <div className="CurriculumOverlay"></div>
      <Container>
        <h1>Curriculum</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

