import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './UniversitiesFooter.css'

export const UniversitiesFooter = () => (
  <Container className="fullUniversities">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/program" variant="primary">Program</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)