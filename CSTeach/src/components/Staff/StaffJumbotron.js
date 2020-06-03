import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './StaffJumbotron.css'

export const StaffJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="staffJumbo">
      <Container className="jumboContainer">
        <h1 className="homeJumboHeader contentCentered" style={{fontSize: '3em'}}>Team</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 