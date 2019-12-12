import React from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import './ProgramContent.css'

export const ProgramContent = () => (
  <React.Fragment>
    <Container>
        <h1>Learn to Code</h1>
        <p>You’ll be challenged in this immersive software engineering program. Taught by industry professionals, you’ll spend 5 days a week and 8 hours a day in learning sessions, coding time, and self-study. When you have finished our curriculum, you will have learned enough to launch a career in software development. We focus on holistic training, and part of our curriculum covers soft skills and personal development. Our curriculum covers everything you will need to know to be a full-stack developer, as well the opportunity to complete an industry certification from Amazon or Microsoft. From programming languages to industry best practices, you will get hands-on experience working with today’s web development tools.</p>
    </Container>
    <Row className="programContentRow">
        <Col xs={12} md={4}>
            <Card >
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Elevate Yourself or Change Your Career</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Click here to read more about curriculum.</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
        <Col xs={12} md={4}>
            <Card className="row2Tile row2Tile2">
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Career Preperation</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Click here to read more about job placement.</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
        <Col xs={12} md={4}>
            <Card className="row2Tile row2Tile2">
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Coding Basics</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Click here to read more about job placement.</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
    </Row>
  </React.Fragment>
)

