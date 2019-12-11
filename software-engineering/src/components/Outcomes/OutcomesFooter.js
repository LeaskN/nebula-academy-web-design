import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './OutcomesFooter.css'

export const OutcomesFooter = () => (
  <Container className="fullOutcomesFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1>
      <p className="contentCentered">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)