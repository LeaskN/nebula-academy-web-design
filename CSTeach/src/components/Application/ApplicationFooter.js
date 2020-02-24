import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './ApplicationFooter.css'

export const ApplicationFooter = () => (
  <Container className="fullApplicationFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
          <div id="spacer" ></div>
          </Col>
          <Col className="contentCentered">
            <div id="spacer" ></div>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)