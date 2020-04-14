import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">AWS Academy Program</h1>
        <h5>Earn your certification with Nebula Academy, an accredited AWS training provider</h5>
        <div style={{paddingTop: '1vw'}}></div>
        <Button href="/registration" variant="warning">View Courses</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 