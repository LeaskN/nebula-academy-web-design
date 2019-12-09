import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CurriculumContent.css'

class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
            button2: false,
            button3: false,
            button4: false, 
            button5: false,
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
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h1>Full Stack Development</h1>
                    <p>Description of what web applications are, what front-end is, what back endis. How differetn people and coders have different preferences and that there are differnt jobs to apply to. Mention Some technologies like CSS HTML REACT AWS and more.</p>
                    <p>AWS Certification Description</p>   
                </Container>
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
            </React.Fragment>
        )
    }
};

export default CurriculumContent;
