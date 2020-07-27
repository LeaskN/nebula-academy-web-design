import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './HomeFooter.css'

export const HomeFooter = () => (
  <Container className="fullHomeFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud and preapre for certification with Nebula Academy</h1><br/>
        <Row>
          {/* <Col className="contentCentered">
            <Button href="/courses" variant="warning">Course Info</Button>
          </Col> */}
          <Col className="contentCentered">
            <Button href="/registration" variant="warning">Register Now</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)