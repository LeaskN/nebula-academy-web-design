import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { PartnersCarosel } from '../Global/PartnersCarosel';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }
    };
    button1 = () => {
        this.setState({ toggle: {button1: true, button2: false, button3: false, button4: false, button5: false } })
    }
    button2 = () => {
        this.setState({ toggle: {button1: false, button2: true, button3: false, button4: false, button5: false } })
    }
    button3 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: true, button4: false, button5: false } })
    }
    button4 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: true, button5: false } })
    }
    button5 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: false, button5: true } })
    }
    scheduleButton1 = () => {
        this.setState({ toggle2:{scheduleButton1: true, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton2 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: true, scheduleButton3: false, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton3 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: true, scheduleButton4: false, scheduleButton5: false}})
    }
    scheduleButton4 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: true, scheduleButton5: false}})
    }
    scheduleButton5 = () => {
        this.setState({ toggle2:{scheduleButton1: false, scheduleButton2: false, scheduleButton3: false, scheduleButton4: false, scheduleButton5: true}})
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Full Stack Development</h1>
                        <p>Description of what web applications are, what front-end is, what back endis. How differetn people and coders have different preferences and that there are differnt jobs to apply to. Mention Some technologies like CSS HTML REACT AWS and more.</p>
                        <p>AWS Certification Description</p>   
                        <Row className="staticCard">
                            <Col className="cardColumns">
                                <Card className="cardDeckLeft">
                                        <Card.Body>
                                            <Card.Title className="subtleButton" onClick={() => this.button1()}>Basics</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.button2()}>Advanced JavaScript</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.button3()}>React</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.button4()}>Certifications</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.button5()}>Job Placement</Card.Title>
                                        </Card.Body> 
                                </Card>
                            </Col>
                            <Col className="cardColumns">
                                {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <Card.Text>
                                                <h1>Basics</h1>
                                                <Row>
                                                    <Col sm={2}>
                                                        <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>
                                                        <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/rubypython.png" alt="" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.</p>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Advanced JavaScript</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>React</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Certifications</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Job Placement</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                            </Col>
                        </Row>
                        <Row>
                            <h1>Career Readiness</h1>
                            <p>We aim to get our candidates placed. Unlike institutions that aim to educate without directing individuals towards a job we primarly work on ensuring our candidates get hired. Beyond our partners and connections, both local and national, we aim to get our students certifications, pass assessments, and create projects that will help with the hiring process.</p>
                        </Row>
                        <Row className="sponsorsArea">
                            <Card id="partnersCard" className="bg-dark text-white">
                                <Card.Img className="cardImage" src={require("../../assets/partners.jpg")} alt="Card image" />
                                <Card.ImgOverlay className="partnersCardOpacity">
                                    <Card.Title>Partners Page</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button variant="primary">Partners Page</Button>
                                </Card.ImgOverlay>
                            </Card>
                            <Card id="speakersCard" className="bg-dark text-white">
                                <Card.Img className="cardImage" src={require("../../assets/guestSpeaker.jpg")} alt="Card image" />
                                <Card.ImgOverlay className="sponsorsCardOpacity">
                                    <Card.Title>Guest Speakers Page</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button variant="primary">Guest Speakers Page</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Row>
                        <Row>
                            <Col className="cardColumns">
                                <Card className="cardDeckLeft">
                                        <Card.Body>
                                            <Card.Title className="subtleButton" onClick={() => this.scheduleButton1()}>Overview</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.scheduleButton2()}>Daily Schedule</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.scheduleButton3()}>Practice Hours</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.scheduleButton4()}>Weekly Calendar</Card.Title>
                                            <hr/>
                                            <Card.Title className="subtleButton" onClick={() => this.scheduleButton5()}>Last Couple Weeks/Job Placement</Card.Title>
                                        </Card.Body> 
                                </Card>
                            </Col>
                            <Col className="cardColumns">
                                {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <Card.Text>
                                                <h1>Overview</h1>
                                                <Row>
                                                    <Col sm={2}>
                                                        <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>
                                                        <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/rubypython.png" alt="" />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.</p>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Daily Schedule</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Practice Hours</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Weekly Calendar</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                                {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                        <Card.Body>
                                            <h1>Last Couple Weeks/Job Placement</h1>
                                            <Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>: null}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <PartnersCarosel />
                </Row>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;
