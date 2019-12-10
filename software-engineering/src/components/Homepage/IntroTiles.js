import React from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap';
import './IntroTiles.css';

export const IntroTiles = () => (
    <React.Fragment>
            <Row className="introRow1">
                <Col xs={12} md={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile1">
                        <Card.ImgOverlay>
                            <Card.Title>Learn to Code in 6 Months</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Button href="/application" variant="outline-success">Apply Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile2">
                        <Card.ImgOverlay>
                            <Card.Title>Get a Technical Job in a Growing Field</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile3">
                        <Card.ImgOverlay>
                            <Card.Title>Industry Starting Salaries are Strong</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className="introRow2">
                <Col xs={12} md={4}>
                    <Card className="row2Tile row2Tile1">
                        <Card className="text-white subTile">
                            <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                            <Card.ImgOverlay className="behindText">
                                <Card.Title>Curriculum</Card.Title>
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
                                <Card.Title>Job Placement Info</Card.Title>
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
                    <Card className="row2Tile bg-dark text-white row2Tile3">
                        <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} display='hidden' alt="Card image" />
                        <Card.ImgOverlay className="hideImage">
                            <h1>100%</h1>
                            <Card.Text>
                            Stats description
                            </Card.Text>
                            <h1>100%</h1>
                            <Card.Text>
                            Stats description
                            </Card.Text>
                            <h1>100%</h1>
                            <Card.Text>
                            Stats description
                            </Card.Text>
                            <h1>100%</h1>
                            <Card.Text>
                            Stats description
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className="introRow3">
                <Col xs={12} md={6}>
                    <Card className="row2Tile row2Tile1">
                        <Card className="text-white subTile">
                            <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                            <Card.ImgOverlay className="behindText">
                                <Card.Title>Curriculum</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Click here to read more about curriculum.</Card.Text>
                                <Button variant="outline-success">Scholarships</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="row2Tile row2Tile2">
                        <Card className="text-white subTile">
                            <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                            <Card.ImgOverlay className="behindText">
                                <Card.Title>Job Placement Info</Card.Title>
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