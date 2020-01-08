import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CourseFooter.css'

export const CourseFooter = () => (
  <Container className="fullCourseFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/curriculum" variant="primary">Curriculum</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="primary">Register</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)