import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PartnersContent.css'

export const PartnersContent = () => (
  <React.Fragment>
    <Container className="partnersContainer">
      <Row>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)