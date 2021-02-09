import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './AllWorkshopsFooter.css'

export const AllWorkshopsFooter = () => (
  <Container className="fullAllWorkshops">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
<h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/staff" variant="secondary">Team</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)