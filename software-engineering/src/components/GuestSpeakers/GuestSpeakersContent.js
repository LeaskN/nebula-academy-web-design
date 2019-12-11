import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './GuestSpeakersContent.css'

export const GuestSpeakersContent = () => (
  <React.Fragment>
    <Container className="guestSpeakersContainer">
      <Row>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="guestSpeakersCard" xs={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Making Something Out of Nothing</Card.Subtitle>
              <Card.Link href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)