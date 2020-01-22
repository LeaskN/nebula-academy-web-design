import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './UniversitiesFooter.css'

export const UniversitiesFooter = () => (
  <Container className="fullUniversitiesFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/outcomes" variant="warning">Outcomes</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="warning">Register Now</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)