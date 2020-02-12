import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './CurriculumFooter.css'

export const CurriculumFooter = () => (
  <Container className="fullCurriculumFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your teaching capacity with Nebula Academy</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/certifications" variant="primary">Certifications</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)