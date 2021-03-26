import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './GuestSpeakerApplicationJumbotron.css'

export const GuestSpeakerApplicationJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="guestSpeakerApplicationJumbotron">
      <Container>
        <h1 className="jumboText">Guest Speakers</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)