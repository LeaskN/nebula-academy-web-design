import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './StaffFooter.css'

export const StaffFooter = () => (
  <Container className="fullStaffFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/program" variant="primary">Course Info</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="primary">Register Now</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)