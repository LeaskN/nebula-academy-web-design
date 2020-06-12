import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CurriculumJumbotron.css'

export const CurriculumJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="curriculumJumbotron">
      <div className="curriculumOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText">Curriculum Development</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

