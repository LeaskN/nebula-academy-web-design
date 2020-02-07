import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './PhilanthropyJumbotron.css'

export const PhilanthropyJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin PhilanthropyJumbo">
      <Container>
      <h1 className="contentCentered">Philanthropy</h1>
      <p>Nebula Academy is a social enterprise institution. We aspire to help our community and world by giving back. The majority of our support heads to We Connect the Dots (<a href="https://wctd.org" className="link">WCTD.org</a>) read on or click below to read more.</p>
      <Button variant='info' href="https://wctd.org" target="blank">We Connect the Dots</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)