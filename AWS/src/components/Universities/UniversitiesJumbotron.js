import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './UniversitiesJumbotron.css'

export const UniversitiesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="universitiesJumbotron">
    <div className="AWSLogo"></div>
      <div className="awsOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText homeJumboText">AWS Academy <span className="orange-text"> Accreditation Preparation </span> Course</h1>
        <p className="homeSubtitle">Earn your certification with <b>Nebula Academy</b>, an accredited <span className="orange-text"> AWS </span> training provider</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

