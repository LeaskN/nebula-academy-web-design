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
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="espositopat"><a className="LI-simple-link" href='https://www.linkedin.com/in/espositopat/'>Pat Esposito</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">Pat Esposito</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                <p>This partnership is a two-way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like, but they are given an opportunity to impress the partner right from the start.</p>
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
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="sharon-cates-williams-a99273a"><a className="LI-simple-link" href='linkedin.com/in/sharon-cates-williams-a99273a'>Sharon Cates Williams</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">Sharon Cates Williams</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                <p>This partnership is a two-way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like, but they are given an opportunity to impress the partner right from the start.</p>
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
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="jmwargo"><a className="LI-simple-link" href='linkedin.com/in/jmwargo'>John Wargo</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="guestSpeakerCardRight">
                                    <Card.Body>
                                            <h1 className="speakerName">John Wargo</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                <p>This partnership is a two-way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like, but they are given an opportunity to impress the partner right from the start.</p>
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
