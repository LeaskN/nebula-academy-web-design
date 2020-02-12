import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './PartnersFooter.css'

export const PartnersFooter = () => (
  <Container className="fullPartnersFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/guestspeakers" variant="primary">Guest Speakers</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)