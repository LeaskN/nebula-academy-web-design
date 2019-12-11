import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ScholarshipsJumbotron.css'

export const ScholarshipsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="ScholarshipsJumbotron">
      <div className="scholarshipOverlay"></div>
      <Container>
        <h1 className="jumboText">Scholarships</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)