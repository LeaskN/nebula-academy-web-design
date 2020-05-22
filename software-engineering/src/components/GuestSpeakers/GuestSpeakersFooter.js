import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './GuestSpeakersFooter.css'

export const GuestSpeakersFooter = () => (
  <Container className="fullGuestSpeakersFooter">
    <Jumbotron>
      <h1 className="contentCentered">Get Involved Today</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/guestspeakerapplication" variant="primary">Speaker Application</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Student Application</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)