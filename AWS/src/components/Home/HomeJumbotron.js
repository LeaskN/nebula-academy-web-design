import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">AWS Academy <span class="orange-text"> Accreditation Preparation </span> Course</h1>
        <div style={{paddingTop: '1vw'}}></div>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 