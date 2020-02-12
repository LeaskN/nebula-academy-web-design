import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './ScholarshipsFooter.css'

export const ScholarshipsFooter = () => (
  <Container className="fullScholarshipsFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/curriculum" variant="primary">Curriculum</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/certifications" variant="primary">Apply</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)