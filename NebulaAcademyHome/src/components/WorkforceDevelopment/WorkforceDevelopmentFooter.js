import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './WorkforceDevelopmentFooter.css'

export const WorkforceDevelopmentFooter = () => (
  <Container className="fullWorkforceDevelopment">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
<h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/universities" variant="primary">Universities</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)