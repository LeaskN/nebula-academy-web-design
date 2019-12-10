import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './InternshipsJumbotron.css'

export const InternshipsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="internshipsJumbotron">
      <div className="internshipsOverlay"></div>
      <Container>
        <h1>Internships</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

