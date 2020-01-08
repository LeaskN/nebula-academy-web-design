import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CurriculumFooter.css'

export const CurriculumFooter = () => (
  <Container className="fullCurriculumFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/universities" variant="primary">Course Info</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="primary">Register Now</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)