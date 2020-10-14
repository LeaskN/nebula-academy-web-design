import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './HomeFooter.css'

export const HomeFooter = () => (
  <Container className="fullHomeFooter">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
      <h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/educators" variant="secondary">Educators</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)