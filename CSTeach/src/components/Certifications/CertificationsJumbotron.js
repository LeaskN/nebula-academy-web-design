import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './CertificationsJumbotron.css'

export const CertificationsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="certificationsJumbotron">
      <div className="certificationsOverlay"></div>
      <Container className="jumboContainer">
          <h1 className="jumboText">Certifications</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

