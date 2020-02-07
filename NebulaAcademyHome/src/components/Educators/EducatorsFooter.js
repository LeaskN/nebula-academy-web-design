import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './EducatorsFooter.css'

export const EducatorsFooter = () => (
  <Container className="fullEducators">
    <Jumbotron>
      <h1 className="contentCentered">View Our Programs</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/workforce-development" variant="secondary">Workforce Development</Button>
          </Col>
          
        </Row>
    </Jumbotron>
  </Container>
)