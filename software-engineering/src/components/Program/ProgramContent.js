import React from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import './ProgramContent.css'

export const ProgramContent = () => (
  <React.Fragment>
    <Container>
        <h1>Learn to Code</h1>
        <p>About 3-5 sentences</p>
        <p>Must include length of time the course takes, AWS, JS, React, and WF experience</p>   
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

