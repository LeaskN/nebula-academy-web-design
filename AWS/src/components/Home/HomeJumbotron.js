import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="AWSLogo"></div>
      <div className="homeOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText homeJumboText">AWS Academy <span className="orange-text"> Accreditation Preparation </span> Course</h1>
        <p className="homeSubtitle">Earn your certification with <b>Nebula Academy</b>, an accredited <span className="orange-text"> AWS </span> training provider</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 