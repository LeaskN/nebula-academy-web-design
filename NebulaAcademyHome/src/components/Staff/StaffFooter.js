import React from 'react';
import { Jumbotron, Container, Button, Col, Row, Form} from 'react-bootstrap';
import './StaffFooter.css'

export const StaffFooter = () => (
  <Container className="fullStaffFooter">
    <Jumbotron>
      <h1 className="contentCentered">Transforming individuals, teams, and organizations</h1>
<h3 className="contentCentered">Continue exploring our website to better understand our offerings</h3><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/" style={{maxHeight:'37px', margin:'auto'}} variant="secondary">Home</Button>
          </Col>
          <Col className="contentCentered">
            <Form encType="text/plain" action="mailto:support@nebulaacademyny.com" method="GET">
              <Button variant="secondary" type="submit">
                Send Us an Email
              </Button>
            </Form>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)