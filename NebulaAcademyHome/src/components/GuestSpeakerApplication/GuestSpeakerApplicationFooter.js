import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './GuestSpeakerApplicationFooter.css'

export const GuestSpeakerApplicationFooter = () => (
  <Container className="fullGuestSpeakerApplicationFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/outcomes" variant="primary">Outcomes</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)