import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import prices from '../../../assets/ProgramCost.png'
import micro from '../../../assets/micro.png'
import tello from '../../../assets/tello.png'
import surface from '../../../assets/surface.png'
import './STEAMCoachContent.css'

class STEAMCoachContent extends Component {
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
                    <p>The certification begins with the 2 day Science Behind Learning Certification training and follows with 21st Century Learning Design (CLD). Through this 5 day program, educators will learn how to introduce students to project-based learning and a collaborative student centered learning environment that takes place to set the stage for success. Participants will also understand how this is different from traditional learning and traditional teaching and learning environments, learn how to build an understanding of the expectations of such a learning environment and experience, how the role and behavior of students has to change, as well as the role and behavior of the teacher, in order to ensure success. Most importantly, participants will have a visualization of what the classroom has to change into and what it looks like when being done successfully. Lastly, participants will learn about building team collaboration so that each member has a clear understanding of the purpose of their work together.</p>
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
                                            Program objectives
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
                                                    <p>The certification begins with the 2-day Science Behind Learning Certification training and follows with 21st Century Learning Design (CLD). Through this 5 day program, educators will learn how to introduce students to project-based learning and a collaborative student centered learning environment that takes place to set the stage for success. Participants will also understand how this is different from traditional learning and traditional teaching and learning environments, learn how to build an understanding of the expectations of such a learning environment and experience, how the role and behavior of students has to change, as well as the role and behavior of the teacher, in order to ensure success. Most importantly, participants will have a visualization of what the classroom has to change into and what it looks like when being done successfully. Lastly, participants will learn about building team collaboration so that each member has a clear understanding of the purpose of their work together. </p>
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
                                                    <li>Adopt a brain-friendly mindset </li>
                                                    <li>Refine brain-friendly skills for learning </li>
                                                    <li>Improve confidence connecting with others</li>
                                                    <li>Understanding of 21CLD in the classroom</li>
                                                    <li>Use of ICT products; Surface Go, Micro:bit, Drone</li>
                                                    <li>Professional Learning Community (PLC) access</li>
                                                    <li>Post-training classroom modeling</li>
                                                </ol>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Program Objectives:</h1>
                                        <Row>
                                            <Col xs={10} md={12}>
                                                <ol>
                                                    <li>Create a brain-based language for connecting</li>
                                                    <li>Adopt a brain-friendly mindset </li>
                                                    <li>Refine brain-friendly skills for learning </li>
                                                    <li>Improve confidence connecting with others</li>
                                                    <li>Understanding of 21CLD in the classroom</li>
                                                    <li>Use of ICT products; Surface Go, Micro:bit, Drone</li>
                                                    <li>Professional Learning Community (PLC) access</li>
                                                    <li>Post-training classroom modeling</li>
                                                </ol>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Modules</h1>
                                            <p><b>Modules 1-6:</b> Coaching Certification</p>
                                            <p><b>Module 7:</b> Introduction to 21st CLD</p>
                                            <p><b>Module 8:</b> Collaboration</p>
                                            <p><b>Module 9:</b> Knowledge Construction</p>
                                            <p><b>Module 10:</b> Use of ICT</p>
                                            <p><b>Module 11:</b> Using tools to support ICT for learning</p>
                                            <p><b>Module 12:</b> Introduction to Sanford’s design thinking model</p>
                                            <p><b>Module 13:</b> Applying Research skills to support empathizing & delivering project outcomes</p>
                                            <p><b>Module 14:</b> Using tools to collaborate & begin Project Framework with        teams</p>
                                            <p><b>Module 15:</b> BBC python and micro:bits activity</p>
                                            <p><b>Module 16:</b> Team Collaboration (project) </p>
                                            <p>Final Team Project: Learning Design Thinking through an Entrepreneurial </p>
                                            <p>ExperienceThe curriculum is designed to engage educators with hands-on activities and exercises intended to help educators experience and learn how design thinking produces outcome through product development and all the roles involved in the process. Educators will be provided opportunities to gain experience in all aspects of an entrepreneurial experience, and how to engage students in this process within the classroom structure. The content can be approached in several different ways and is easily adaptable to a variety of situations. Each unit contains suggested sample activities, but instructors are provided clear learning topics to allow them the freedom to develop their own exercises. Likewise, sample student objectives are suggested but the instructor has the freedom to create specific objectives to match their own exercises and assignments. </p>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Certification</h1>
                                            <Row>
                                                <p>Participants will earn a STEAM Coach Certification and CTLE credits, if applicable.</p>
                                                {/* <p>Click <a href="">here</a> to learn more about our accreditation process (link to accreditation chapter). </p> */}
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                    <Row  style={{justifyContent: 'center'}}>
                        <img className="staticCard" width="80%" src={prices}  alt="prices"></img>
                    </Row>
                    <h1>Optional STEAM Coach Kit:</h1>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="surface" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={surface}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Microsoft Surface Go</b></h3>
                        <p>64GB / Intel 4415Y / 4GB RAM / WiFi</p>
                        <p>New Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and  a stunning touchscreen with the power of Windows 10 Home in S mode. Surface Go Signature Type Keyboard included.</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="tello" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={tello}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Tello Drone</b></h3>
                        <p>14-Core processor / Collision Detection / Propeller Protection / 80 Grams / Image Stabilization / 5 MP Photos / 13 min flight time / 100m Image Transmission Distance / 720p HD Transmission /Tello App / Controller / Smartphone VR Compatibility</p>
                        <p>Perform flying stunts, shoot quick videos with EZ Shots, and learn about drones with coding education. Get yourself a Tello to find out just how awesome flying a drone can be!</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="micro" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={micro}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>BBC’s Micro:bit</b></h3>
                        <p>52.0mm x 43.0mm x 11.0mm / 2.0" x 1.7" x 0.4" / Product Weight: 9.0g / 0.3oz / accelerometer / compass / processor / radio & Bluetooth antenna / battery socket / 2 0 pin edge connector / USB connector / LED lights</p>
                        <p>Designed specifically for kids and beginners, the Micro:bit is a pocket-sized computer that you can code, customize and control to bring your digital ideas, games and apps to life!</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default STEAMCoachContent;
