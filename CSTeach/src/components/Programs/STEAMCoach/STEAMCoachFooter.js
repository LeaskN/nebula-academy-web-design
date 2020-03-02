import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './STEAMCoachFooter.css'

export const STEAMCoachFooter = () => (
  <Container className="fullSTEAMCoachFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
      <Row>
        <Col className="contentCentered">
          <Button href="/application" variant="primary">Register</Button>
        </Col>
        <Col className="contentCentered">
          <Button href="/cstc" variant="primary">Computer Science Teaching Certification</Button>
        </Col>
      </Row>
    </Jumbotron>
  </Container>
)