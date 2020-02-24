import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './RegisterFooter.css'

export const RegisterFooter = () => (
  <Container className="fullregisterFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/register" variant="primary">Register</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)