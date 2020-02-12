import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CertificationsFooter.css'

export const CertificationsFooter = () => (
  <Container className="fullCertificationsFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/careers" variant="primary">Careers</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)