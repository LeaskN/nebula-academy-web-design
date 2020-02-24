import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CurriculumContent.css'


class CurriculumContent extends Component {
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
                    <h1>Curriculum designed to support student centered outcomes: Addressing the diverse learning needs of a modern classroom.</h1>
                    <p>Our curriculum is designed by applying cognitive neuroscience research, our own experience with working with students and educators, blended with real-world industry experience. Our instructors teach across populations of students, educators, and adults in the workforce. This model brings greater value to our programs and to our participants. Our content and teaching model is continuously improved through feedback from students, educators, and our industry partners.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()} 
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Design the Strategy
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()} 
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Budgets & Timelines to Support your Capabilities
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            Building Capacity
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            Execution on Strategy
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button5()}
                                            className={this.state.toggle.button5 ? " subtleButton toggled" : "subtleButton"}>
                                            Measuring Outcomes and Building on Success
                                            </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns offWhite">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Design the Strategy:</h1>
                                            <Row>
                                            <h3>Let us help you build a successful strategy to implement computer science in your school or district</h3>
                                                <Col xs={10}md={12}>
                                                    <p>With technology innovation changing across every industry, our workforce needs are shifting. This shift requires downstream changes in how and what we teach students to prepare them for the modern workplace. Fewer than half of the schools across the nation are able to offer computer science education to their students. The challenges schools face is the ability to build teacher confidence and capacity in teaching new skills, skills that require a higher level of thinking. Skills that help students think like computer scientists. Learning to code teaches problem solving and critical thinking, and prepares students to better understand how technology can impact businesses and society in positive ways.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Budgets & Timelines to Support your Capabilities</h1>
                                        <Row>
                                            <Col xs={10} md={12}>
                                                <p>Every customer has unique budget structures that support new initiatives and long-term planning goals. Understanding cost models for implementation along with current capacity and future capacity allows for a strategy that is structured for long term success.</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Building Capacity:</h1>
                                        <Row>
                                            {/* <Col xs={1} md={3}>
                                                <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                            </Col> */}
                                            <Col xs={10} md={12}>
                                                <p>We support customers in better understanding resource needs to build long-term computer science programs. Culture changes may need to be considered in order to ensure long term success and the integration of computer science across K-12. Through our coaching model and industry experience  our instructors help customers reach their goals and overall vision of what success looks like.</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Execution on Strategy:</h1>
                                            <Row>
                                                <Col xs={10} md={12}>
                                                    <p>Through collaboration with customers we design a strategy that defines a vision, strategic goals, budget alignment, and time-line. Through a multi-year plan, we introduce computer science at a pace that fits our customers’ culture and capacity to successfully deliver.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Measuring Outcomes and Building on Success:</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>As a research focused organization, we offer an assessment structure for both teachers and students to evaluate and measure learning outcomes throughout our engagement model. This structure creates the opportunity to provide continuous improvement in the overall computer science initiative. Demonstrating success is accomplished through the metrics that we set with customers, which align with organization’s overall goals, and what success looks like for each customer and each engagement.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                        <h1>Execution</h1>
                        <p>Description</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.scheduleButton1()}
                                            className={this.state.toggle2.scheduleButton1 ? " subtleButton toggled" : "subtleButton"}>
                                            Initial Meeting
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton2()}
                                            className={this.state.toggle2.scheduleButton2 ? " subtleButton toggled" : "subtleButton"}>
                                            Planned First Step
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton3()}
                                            className={this.state.toggle2.scheduleButton3 ? " subtleButton toggled" : "subtleButton"}>
                                            Teacher Training
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton4()}
                                            className={this.state.toggle2.scheduleButton4 ? " subtleButton toggled" : "subtleButton"}>
                                            Systems Setups & Tech Integrations
                                        </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.scheduleButton5()}
                                            className={this.state.toggle2.scheduleButton5 ? " subtleButton toggled" : "subtleButton"}>
                                            Teaching in the Classroom
                                        </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns">
                            {this.state.toggle2.scheduleButton1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Initial Meeting</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>The Nebula Academy Software Engineering program is 22 weeks long.</p>
                                                    <p>We primarily work in 4-week sprints where we are learning, practicing, and implementing new and previously covered technologies. We finish the 4-week cycle by creating projects.</p>
                                                    <p>The following week is flexible where students are covering their weak areas, fixing old or current projects, or taking some time to recuperate.</p>
                                                    <p>We can't do anything with burnt-out participants, so we want to ensure that participants are pacing themselves for the long-haul: employment.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Planned First Step</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    <p>The daily schedule will vary but it will generally look like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up is a classic developer team start to the day where issues, thoughts, and schedules are shared.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>There are specific problems which can be practiced in order to build coding competency and interview ability. We practice them daily.</p>
                                                    <p>11:00 AM: New Subject Matter</p>
                                                    <p style={{marginLeft:"20px"}}>We will be learning our new topics at this time specifically in an introduction and coaching style.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>We provide lunch and snacks to all participants in our program. This is an immersive program and we need sharp brains that are fed and ready to learn. Whether you are paying for the program yourself, by your company, or have been granted a scholarship we create an inclusive learning environment that includes a healthy lunch and snacks each day. We do also have a fridge so participants can bring in meals if these choose to.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Project based learning. Here we will be continuing with the new subject specifically in a hands-on style.</p>
                                                    <p>3:00 PM: Content Review</p>
                                                    <p style={{marginLeft:"20px"}}>Old Material. At the end of the day we want to cover old topics that students feel they need to brush up on.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>Participants frequently are working on an issue, new material, or a project and extend their day beyond 4:00 PM but this is the "official" end of day.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Teacher Training</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <p>Students will have to apply themselves both in and outside of the classroom. We recommend practicing around 2-4 additional hours each night and 4-6 hours on the weekend.</p>
                                                <p>We understand that this is intense and have built in planning to ensure that our students don't burn out. Firstly this additional practice time isn't required, secondly 5th weeks are weeks that can be used to rest, relax, and recuperate.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Systems Setups & Tech Integrations</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <p>As previously mentioned, we typically have four weeks of study and practice followed by one week of unspecified time.</p>
                                                <p>Depending upon where we are in the course this can vary for different students. Some will relax, some will work on previous projects, and others will study previous topics.</p>
                                                <p>We follow a <a href="https://www.redcort.com/us-federal-bank-holidays">National US Holiday Calendar</a> similar to this link and build our recuperation weeks around them.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Teaching in the Classroom</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                <p>In the last couple weeks of the course our daily schedule will not revolve around practice and learning but instead around applications, projects, interview preparation, mock interviews, studying and taking certification exams, meeting with career coaches to outline short list of employers, completing job applications, and creating a plan to ensure they land a job.</p>
                                                <p>This means our daily schedule will look more like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up becomes even more important as participant schedules will vary and so will topics covered. By doing this students will see similarities and be able to help one another with their problems.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>This is core interview practice and will be kept up throughout.</p>
                                                    <p>11:00 AM: Applying for jobs</p>
                                                    <p style={{marginLeft:"20px"}}>Every day our participants will be sending out new applications. We want to ensure participants are hitting both quality and quantity.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>Having a set time for lunch helps fight burnout and is still suggested as something the students should observe for the full hour.</p>
                                                    <p>1:30 PM: Projects</p>
                                                    <p style={{marginLeft:"20px"}}>Updating and fixing projects. Unless a participant has a new project that they are passionate about we don't suggest starting new projects at this time. However we definitely want our participants to dive in deeper on older projects.</p>
                                                    <p>3:00 PM: Interview Preparation</p>
                                                    <p style={{marginLeft:"20px"}}>Interview prep. This can take the form of Jeopardy games, white-boarding, or coding challenges.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>We suggest taking the time to visit some hiring partners, local companies with job listings, & doing some "one-click" applications through application websites like LinkedIn, Microsoft, Google, Amazon, Company Partner Sites, ZipRecruiter, & Glassdoor.</p>
                                                </Col>
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

export default CurriculumContent;
