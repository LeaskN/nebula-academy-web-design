import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './GuestSpeakersContent.css'


class GuestSpeakers extends Component {
    state = {

    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="staticCard">
                        <Col sm={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                    <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="espositopat"><a className="LI-simple-link" href='https://www.linkedin.com/in/espositopat/'>Pat Esposito</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">Pat Esposito</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <p className="speakerAbout">"I'm passionate about technology and the amazing experiences we create through digital transformation. Digital transformation creates efficiency in the way we collaborate within the business and with our partners. It helps us gain better insight by looking more deeply at our data and provides perspectives into our processes and performance."</p>

                                                <p className="speakerAbout"><span className="speakerAboutSpan">His advice to those entering into the tech space: </span>Find a coping mechanism, whatever works for you. Everybody's got something different. Find out that little thing that really makes you want to come back again and do it, again and again. For me it's getting something trivial to work for the first time, new language, a new platform. It's so exciting that it just keeps bringing me back to saying, yeah I really want to be a programmer. I encourage all of you to find a mentor, and work with them.</p>

                                                <p>Read more of his address to Nebula Academy students <a href="https://www.linkedin.com/pulse/pathways-success-program-se-bootcamp-guest-speaker-highlight-carey/">here</a>.</p>


                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="staticCard">
                        <Col sm={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="sharon-cates-williams-11160111"><a className="LI-simple-link" href='https://www.linkedin.com/in/sharon-cates-williams-a99273a/'>Sharon Cates Williams</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">Sharon Cates Williams</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>Deputy Commissioner responsible for ensuring the effective, efficient, and prudent use of agency resources by developing sound practices, policies, and strategies to promote accountability and high performance throughout the Agency.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="staticCard">
                        <Col sm={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="jmwargo"><a className="LI-simple-link" href='https://www.linkedin.com/in/jmwargo/'>John Wargo</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">John Wargo</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <p>Experienced, technical, mobile industry professional focused on enterprise mobility, and mobile application development. Clear communicator, accomplished writer, engaging and inspiring professional speaker; able to deliver content to a wide range of non-technical to technical audience types. Excellent listener. Analytical with solid problem solving and solution architecture skills.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default GuestSpeakers;
