import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './SBLSContent.css'

class SBLSContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        },
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
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()} 
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Program Description
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()} 
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Program Objectives
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            Modules
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button5()}
                                            className={this.state.toggle.button5 ? " subtleButton toggled" : "subtleButton"}>
                                            Certification
                                        </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns offWhite">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Program Description:</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>The Science Behind Learning Certification program is a 2-day in-person professional development program dedicated to Education sector professionals. This program is designed for the educator audience, including teachers, administrators, and anyone working in the education sector with students. Upon completing this learning experience, participants will have the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive out-comes and to create more brain friendly learning environments and experiences.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Program Objectives:</h1>
                                        <Row>
                                            <Col xs={10} md={12}>
                                                <ol>
                                                    <li>Create a brain-based language for connecting</li>
                                                    <li>Adopt a brain-friendly mindset</li>
                                                    <li>Refine brain-friendly skills for learning</li>
                                                    <li>Improve confidence connecting with others</li>
                                                </ol>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Modules</h1>
                                                <p><b>Module 0:</b> Program Orientation</p>
                                                <p><b>Module 1:</b> Intro to Science Behind Learning</p>
                                                <p><b>Module 2:</b> Neuroscience Foundation</p>
                                                <p><b>Module 3:</b> Brain-based Learning</p>
                                                <p><b>Module 4:</b> Brain-friendly Communications</p>
                                                <p><b>Module 5:</b> Brain-friendly Connections</p>
                                                <p><b>Module 6:</b> Emotional Regulation</p>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Certification</h1>
                                            <Row>
                                                <p>Participants will earn a Science Behind Learning Certification and CTLE credits, if applicable.</p>
                                                {/* <p>Click <a href="">here</a> to learn more about our accreditation process (link to accreditation chapter). </p> */}
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default SBLSContent;
