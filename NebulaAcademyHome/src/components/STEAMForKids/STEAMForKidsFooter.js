import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './STEAMForKidsFooter.css'

export const STEAMForKidsFooter = () => (
  <Container className="fullSTEAMForKids">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
<h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/educators" variant="secondary">Educators</Button>
          </Col>å
        </Row>
    </Jumbotron>
  </Container>
)