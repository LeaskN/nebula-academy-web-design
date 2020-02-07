import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './STEAMForKidsJumbotron.css'

export const STEAMForKidsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="STEAMForKidsJumbo noMargin">
      <Container>
      <h1 className="STEAMForKidsJumboHeader contentCentered">STEAM For Kids</h1>
      <p className="STEAMForKidsJumboSmallerHeader">STEAM kids is an after-school program which enables kids, ages 7-18, the opportunity to learn about computer science, coding and careers across STEAM (Science, Technology, Engineering, Arts, Math) industries.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 