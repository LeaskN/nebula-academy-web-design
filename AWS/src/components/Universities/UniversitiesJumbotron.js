import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './UniversitiesJumbotron.css'

export const UniversitiesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="universitiesJumbotron">
      <div className="universitiesOverlay"></div>
      <Container>
        <h1 className="jumboText">Universities</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

