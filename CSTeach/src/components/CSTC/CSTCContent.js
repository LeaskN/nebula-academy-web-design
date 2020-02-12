import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CSTCContent.css'
import prices from '../../assets/programPrices.png'
import micro from '../../assets/micro.png'
import tello from '../../assets/tello.png'
import surface from '../../assets/surface.png'

class CSTCContent extends Component {
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
                    <h1>CSTC for the future: teach what's needed to your students</h1>
                    <p>The certification begins with the 2 day Science Behind Learning Certification training and follows with 21st Century Learning Design (CLD). Through this 5 day program, educators will learn how to introduce students to project-based learning and a collaborative student centered learning environment that takes place to set the stage for success. Participants will also understand how this is different from traditional learning and traditional teaching and learning environments, learn how to build an understanding of the expectations of such a learning environment and experience, how the role and behavior of students has to change, as well as the role and behavior of the teacher, in order to ensure success. Most importantly, participants will have a visualization of what the classroom has to change into and what it looks like when being done successfully. Lastly, participants will learn about building team collaboration so that each member has a clear understanding of the purpose of their work together.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()} 
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Description
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()} 
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Program objectives
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            5 Computer Science Concepts
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
                                            <h1>Description:</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>Through our Computer Science Certification, we help students and teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning.</p>
                                                    <p>Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Program Objectives:</h1>
                                        <Row>
                                                <p>The 4-week certification begins with the 5-day STEAM Coach Certification, and continues for 3 weeks with Computer Science framework, based on the NYS Board of Regents to earn a Computer Science Certificate in the classroom teaching service. </p>
                                                <p>Candidates will complete 4 weeks of coursework in computer science that addresses the following five Computer Science concepts: 1) algorithms and programming, 2) computing systems, 3) data and analysis, 4) impacts of computer, and 5) networks and the internet. Candidates will also learn the American Disabilities Act (ADA) website accessibility compliance requirements and how to code for accessibility. Furthermore, candidates will learn and understand how computers can be used in educational settings to meet the needs of all learners, including those with learning differences.</p>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                    <h3>Algorithms and Programming</h3>
                                    <p>An algorithm is a sequence of steps designed to accomplish a specific task. Algorithms are translated into programs, or code, to provide instructions for computing devices. Algorithms and programming control all computing systems, empowering people to communicate with the world in new ways and solve compelling problems. The development process to create meaningful and efficient programs involves choosing which information to use and how to process and store it, breaking apart large problems into smaller ones, recombining existing solutions, and analyzing different solutions.</p>
                                    <h3>Computing Systems</h3>
                                    <p>People interact with a wide variety of computing devices that collect, store, analyze, and act upon information in ways that can affect human capabilities both positively and negatively. The physical components (hardware) and instructions (software) that make up a computing system communicate and process information in digital form. An understanding of hardware and software is useful when troubleshooting a computing system that does not work as intended.</p>
                                    <h3>Data and Analysis</h3>
                                    <p>Computing systems exist to process data. The amount of digital data generated in the world is rapidly expanding, so the need to process data effectively is increasingly important. Data is collected and stored so that it can be analyzed to better understand the world and make more accurate predictions.</p>
                                    <h3>Impacts of Computing</h3>
                                    <p>Computing affects many aspects of the world in both positive and negative ways at local, national, and global levels. Individuals and communities influence computing through their behaviors and cultural and social interactions, and in turn, computing influences new cultural practices. An informed and responsible person should understand the social implications of the digital world, including equity and access to computing. </p>
                                    <h3>Networks and the Internet</h3>
                                    <p>Computing devices typically do not operate in isolation. Networks connect computing devices to share information and resources and are an increasingly integral part of computing. Networks and communication systems provide greater connectivity in the computing world by providing fast, secure communication and facilitating innovation.</p>
                                </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Modules</h1>
                                                <p><b>Modules 1-16:</b> STEAM Coach Certification</p>
                                                <p><b>Module 17:</b> File navigation and manipulation through terminal</p>
                                                <p><b>Module 18:</b> Neuroscience Foundation</p>
                                                <p><b>Module 19:</b> JTML & CSS</p>
                                                <p><b>Module 20:</b> Deployment of static sites</p>
                                                <p><b>Module 21:</b> Git & GitHub</p>
                                                <p><b>Module 22:</b> Algorithms & Programming</p>
                                                <p><b>Module 23:</b> Computer Systems</p>
                                                <p><b>Module 24:</b> Data & Analysis</p>
                                                <p><b>Module 25:</b> JavaScript</p>
                                                <p><b>Module 26:</b> DOM Manipulation</p>
                                                <p><b>Module 27:</b> Event Listeners</p>
                                                <p><b>Module 28:</b> Reading & writing data to local storage</p>
                                                <p><b>Module 29:</b> Impacts of Computing</p>
                                                <p><b>Module 30:</b> Introduction to Python</p>
                                                <p><b>Module 31:</b> CAP Stone Development Project</p>
                                                <p><b>Module 32:</b> Final Presentations</p>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Certification</h1>
                                            <Row>
                                                <p>All of our programs will be evaluated for accreditation from NCCRS in Summer 2020.  Participants who take our programs will be grandfathered in to receive accreditation, if and when our programs are vetted. Accreditation is not determined by Nebula Academy. Participants’ organization will determine if the participant will receive accreditation.</p>
                                                {/* <p>Click here to learn more about our accreditation process (link to accreditation chapter). </p> */}
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

export default CSTCContent;
