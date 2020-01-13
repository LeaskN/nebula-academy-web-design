import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './UniversitiesJumbotron.css'

export const UniversitiesJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="universitiesJumbotron">
      <div className="universitiesOverlay"></div>
      <Container>
        <h1 className="jumboText">Universities</h1>
        <p>Keeping up with the ever changing and growing workforce needs by industry is challenging, colleges and universities know this all too well.</p>
        <p>Nebula Academy supports building capacity by bridging the gap between academia and industry. </p>
        <Button style={{zIndex:"100"}} href="https://calendly.com/tomlemons/nebulaacademy" target="empty" variant="success">Impact My University Today</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

