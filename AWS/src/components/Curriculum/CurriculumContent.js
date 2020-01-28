import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1: true,
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
                <Container>
                    <h1>Full Stack Development</h1>
                    <p>
                        Courseware is authored and maintained by AWS and taught by our industry instructors who have earned AWS Academy Accreditation. Regular updates from AWS reflect the pace of innovation, new releases and best practices. 
                    </p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()}
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Academy Cloud Foundations
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()}
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Academy Cloud Architect
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            Academy Cloud Operations
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            Academy Cloud Developing
                                        </Card.Title>
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Academy Cloud Foundations</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>This content is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks. Many of the upcoming topics and names will be foreign to you but you'll be VERY comfortable with each one of them by the end of the program.</p>
                                                    <p>Coding Basics include things from creating a personalized coding environment to JavaScript basics, learning about data structures, and understanding how to save your work through Git & GitHub.</p>
                                                    <p>The goal of this course is to land our participants with high-level jobs, most of which require a technical conversation before hand. To address this we will always have informal conversations regarding a topic and then cover probable interview questions.</p>
                                                </Col>
                                            </Row>

                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <Col>
                                            </Col>
                                            <h1>Academy Cloud Architect</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>Advanced JavaScript contains topics including, but not limited to: functions, scope, debuggin, the basic accumilator pattern, & higher order functions.</p>
                                                    <p>These topics allow us to gain an understanding of how JavaScipt works which in turn enables us to build robust registrations.</p>
                                                    <p>We will learn about HTML, CSS, DOM manipulation, event listeners, and how JavaScript can elevate your registration. Once we have learned these previous topics we will deploy some static websites.</p>
                                                    <p>Every topic that is covered will be practiced in a project which will be accessible on GitHub and usually deployed as a website for potential employers to view.</p>
                                                    <p>Without a traditional Computer Science education we understand that projects are what set our participants apart from the crowd, specifically traditional students who dont have many deployed projects.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Academy Cloud Operations</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10} md={12}>
                                                    <p>React is a front-end web technology which enables us to create super complex websites. It stems from a technology that Facebook created and eventually evolved into React. One of the primary features of React is that it allows developers to create large registrations which can change data without reloading the page.</p>
                                                    <p>To experience this go to Facebook and click around. Notice that the top bar rarely updates. This creates a more fluid web experience and allows us to create more powerful apps.</p>
                                                    <p>Once our participants have learned how to work with React they will immediately look to create multiple projects. The first of which will be portfolios which will link to previously created projects, bios, and resumes.</p>
                                                    <p>There are many ways to go from here but a participants projects can represent what they are interested in. We teach frontend, backend, and fullstack but if a participant is more inclined towards one of these three they are invited to focus on that.</p>
                                                    <p>The bottom lines are employment and payment, knowing React can land someone a high-paying job in a short amount of time.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Academy Cloud Developing</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10} md={12}>
                                                    <p>Aside from knowing powerful technologies we focus on certifications. Our instructors are AWS Certified and our institution is an AWS Academy which means we are capable of teaching students to AWS certifications.</p>
                                                    <p>Aligning our content with the AWS Cloud Practitioner exam is another way that our students get a step up above the competiton. AWS certifications are the most sought after in the technology fields today and put particiaptns on the right track to climbing up to higher paying jobs and more stimulating roles.</p>
                                                    <p>Once again this all comes down to jobs and payment, working with us makes particiapnts ready to pass the AWS Cloud Practitioner exam which leads to faster employment and higher pay.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                    <Row>
                        <h1>Schedule & Delivery Options</h1>
                        <p>We understand that a majority of our participants may be juggling other education, career, or personal priorities. Our schedule provides flexibility to ensure participants can balance gaining new skills while managing existing commitments.</p>
                    </Row>
                    <Row className="sponsorsArea">
                        <Col xs={12} lg={6} xl={6} className="curriculumBackImage1">
                            <Card className="overImage">
                                <Card.Body>
                                    <Card.Title>Partners</Card.Title>
                                    <Card.Text>
                                        Nebula Academy is helping companies prepare for the future of work.  Let us help you with your recruitment needs, as we develop the talent to grow your business. Learn more about our Partner program and how your company can be a part of addressing the skills gap so you can scale your business.
                                    </Card.Text>
                                    <Button href="/partners" variant="warning">Partners</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={6} className="curriculumBackImage2">
                            <Card className="overImage">
                                <Card.Body>
                                    <Card.Title>Guest Speakers</Card.Title>
                                    <Card.Text>
                                        The information technology field is vast and offers opportunities that span every industry.  At Nebula Academy we offer our participants the opportunity to hear and speak to industry experts from diverse communities across industries.
                                    </Card.Text>
                                    <Button href="/guestspeakers" variant="warning">Guest Speakers</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.scheduleButton1()}
                                            className={this.state.toggle2.scheduleButton1 ? " subtleButton toggled" : "subtleButton"}>
                                            In Person Sessions
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton2()}
                                            className={this.state.toggle2.scheduleButton2 ? " subtleButton toggled" : "subtleButton"}>
                                            Live Remote Sessions
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton3()}
                                            className={this.state.toggle2.scheduleButton3 ? " subtleButton toggled" : "subtleButton"}>
                                            Lab Hours
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton4()}
                                            className={this.state.toggle2.scheduleButton4 ? " subtleButton toggled" : "subtleButton"}>
                                            Instructor Support Hours
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton5()}
                                            className={this.state.toggle2.scheduleButton5 ? " subtleButton toggled" : "subtleButton"}>
                                                Exam Prep Hours
                                            </Card.Title>
                                    </Card.Body> 
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>In Person Sessions</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <p>All in person sessions take place at 180 Michael Drive in Syosset NY 11791.  To locate our facility drive around the back of the building and look for our signs and entrance in the back-parking lot.</p>
                                                    <ul>
                                                        <li>All sessions begin promptly at 9:00 AM and end promptly at 4:00 PM</li>
                                                        <li>Participants can stay and continue working on labs after 4:00 PM and until closing.  Instructors are available depending on scheduling of other programs each day after 4:00 PM.</li>
                                                        <li>Participants can utilize our laptops within the facility and on as available basis, we cannot guarantee availability of a laptop. We recommend bringing your own each day.</li>
                                                        <li>There is a kitchen with refrigerator and microwave for those bringing a lunch. We suggest bringing a refillable water bottle as we have a water cooler available.</li>
                                                    </ul>
                                                    <p>What to expect for the flow of learning each day:</p>
                                                    <ul>
                                                        <li>Instructor led content and lab time will vary throughout each day.</li>
                                                        <li>Participants who invest in additional lab time are more likely to be successful in passing exams and to be able to demonstrate learned skills in interviews and on the job.</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Live Remote Sessions</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <ul>
                                                    <li>Participants are provided details on how to access the online sessions via Zoom calls upon registration and before sessions begin.</li>
                                                    <li>Participants will have access to our Microsoft Teams environment for both during and outside class hours engagement.</li>
                                                    <li>All live remote sessions are a blend of participates who are in the classroom and in the virtual classroom.</li>
                                                    <li>Microsoft Teams is monitored by instructors throughout the sessions to ensure remote experiences are as close to in person as possible.</li>
                                                    <li>We recommend that you are hardwired to an internet connection during live sessions to avoid wireless delays in connectivity</li>
                                                    <li>Instructions for setup and access to any additional content will be shared with participations via Microsoft Teams.</li>
                                                </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Lab Hours</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Lab time is blended throughout the session days and we encourage participants to utilize independent study time on labs outside of class.</li>
                                                        <li>Participants have access to labs from outside of class</li>
                                                        <li>Lab sessions are timed and in general participants have ample time to complete lab assignments</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Instructor Support Hours</h1>
                                        <Card.Text>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Instructors are available via Microsoft Teams for support participants outside of class hours, expect a response to questions from instructors and students as this is a community contribution environment.</li>
                                                        <li>Instructors are available for scheduled 1:1 sessions during the program hours as necessary</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Exam Prep Hours</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                    <ul>
                                                        <li>Designated hours are setup during program sessions to support participants with preparing for certification exams.</li>
                                                        <li>All scheduled sessions are posted within Microsoft Teams for awareness, we highly recommend participants work with other program participants in study groups to support successful exam scores.</li>
                                                        <li>Participants can schedule 1:1 sessions with instructors during program hours</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;