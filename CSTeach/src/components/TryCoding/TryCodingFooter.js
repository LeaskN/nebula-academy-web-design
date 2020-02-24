import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './TryCodingFooter.css'

export const TryCodingFooter = () => (
  <Container className="fullTryCodingFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/programs" variant="primary">Programs</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/register" variant="primary">Register</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)