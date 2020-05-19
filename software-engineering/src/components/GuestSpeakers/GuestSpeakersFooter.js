import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './GuestSpeakersFooter.css'

export const GuestSpeakersFooter = () => (
  <Container className="fullGuestSpeakersFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/internships" variant="primary">Internships</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)