import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CareersFooter.css'

export const CareersFooter = () => (
  <Container className="fullCareersFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/register" variant="primary">Register</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)