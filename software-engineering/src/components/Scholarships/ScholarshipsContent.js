import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ScholarshipsContent.css'

export const ScholarshipsContent = () => (
  <React.Fragment>
    <Container className="scholarshipContainer">
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)