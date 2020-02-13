import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CurriculumFooter.css'

export const CurriculumFooter = () => (
  <Container className="fullCurriculumFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      <div>
        <Row>
          <Col className="contentCentered">
            <Button href="/universities" variant="warning">Course Info</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="warning">Register Now</Button>
          </Col>
        </Row>
      </div>
    </Jumbotron>
  </Container>
)