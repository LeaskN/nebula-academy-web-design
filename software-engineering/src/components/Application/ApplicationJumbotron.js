import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ApplicationJumbotron.css'

export const ApplicationJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="ApplicationJumbotron">
      <Container>
        <h1 className="jumboText" >Application</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

