import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './ApplicationPhase2Footer.css'

export const ApplicationPhase2Footer = () => (
  <Container className="fullApplicationPhase2Footer">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Register</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)