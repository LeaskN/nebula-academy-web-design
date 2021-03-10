import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './RegistrationFooter.css'

export const RegistrationFooter = () => (
  <Container className="fullRegistration">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
<h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/philanthropy" variant="secondary">Philanthropy</Button>
          </Col>
          
        </Row>
    </Jumbotron>
  </Container>
)