import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './SBLSFooter.css'

export const SBLSFooter = () => (
  <Container className="fullSBLSFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/register" variant="primary">Register</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/STEAMCoach" variant="primary">STEAM Coach Certification</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)