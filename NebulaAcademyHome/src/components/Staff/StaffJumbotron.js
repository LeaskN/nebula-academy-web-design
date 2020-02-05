import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './StaffJumbotron.css'

export const StaffJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="staffJumbo">
      <div className="staffOverlay"></div>
      <Container>
        <h1 className="jumboText">Team</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 