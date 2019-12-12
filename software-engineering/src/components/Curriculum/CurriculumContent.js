import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
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
                <Container>
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
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>This content is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks. Many of the upcoming topics and names will be foreign to you but you'll be VERY comfortable with each one of them by the end of the program.</p>
                                                    <p>Coding Basics include things from creating a personalized coding environment to JavaScript baiscs, learning about data structures, and understanding how to save your work through Git & GitHub.</p>
                                                    <p>The goal of this course is to land our participants with high-level jobs, most of which require a technical conversation before hand. To address this we will always have informal conversations regarding a topic and then cover probable interview questions.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                        <h1>Advanced JavaScript</h1>
                                        <Row>
                                                <Col xs={1} md={3} style={{flexDirection: "column;", justifyContent: "space-around"}}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    <div style={{height: "100px"}}></div>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                    <div style={{height: "100px"}}></div>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />

                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>Advanced JavaScript contains topics including, but not limited to: functions, scope, debuggin, the basic accumilator pattern, & higher order functions.</p>
                                                    <p>These topics allow us to gain an understanding of how JavaScipt works which in turn enables us to build robust applications.</p>
                                                    <p>We will learn about HTML, CSS, DOM manipulation, event listeners, and how JavaScript can elevate your application. Once we have learned these previous topics we will deploy some static websites.</p>
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
                                            <h1>React</h1>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>React is a front-end web technology which enables us to create super complex websites. It stems from a technology that Facebook created and eventually evolved into React. One of the primary features of React is that it allows developers to create large applications which can change data without reloading the page.</p>
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
                                            <h1>Certifications</h1>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>Aside from knowing powerful technologies we focus on certifications. Our instructors are AWS Certified and our institution is an AWS Academy which means we are capable of teaching students to AWS certifications.</p>
                                                    <p>Aligning our content with the AWS Cloud Practitioner exam is another way that our students get a step up above the competiton. AWS certifications are the most sought after in the technology fields today and put particiaptns on the right track to climbing up to higher paying jobs and more stimulating roles.</p>
                                                    <p>Once again this all comes down to jobs and payment, working with us makes particiapnts ready to pass the AWS Cloud Practitioner exam which leads to faster employment and higher pay.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <Card.Text>
                                            <h1>Job Placement</h1>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>Bottom line is getting a well-paying job.</p>
                                                    <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                    <p>This partnership is a two way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                    <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like but they are given an opportunity to impress the partner right from the start.</p>
                                                </Col>
                                            </Row>
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
                                <Button href="/partners" variant="primary">Partners Page</Button>
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
                                <Button href="/guestspeakers" variant="primary">Guest Speakers Page</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Row>
                    <Row className="staticCard">
                        <Col className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body>
                                        <Card.Title className="subtleButton" onClick={() => this.scheduleButton1()}>Schedule Overview</Card.Title>
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
                                            <h1>Schedule Overview</h1>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>The Nebula Academy Software Engineering program is 22 weeks long.</p>
                                                    <p>We primarily work in 4 week sprints where we are learning, practicing, and implimenting new and previously covered technologies. We finish the 4 week cycle by creating projects.</p>
                                                    <p>The following week is flexible where students are covering their weak areas, fixing old or current projects, or taking some time to recooperate.</p>
                                                    <p>We can't do anything with burnt-out participants so we want to ensure that participants are pacing themselves for the long-haul: employment.</p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle2.scheduleButton2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1>Daily Schedule</h1>
                                        <Card.Text>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>The daily schedule will vary but it will generally look like this:</p>
                                                    <p>9:00 AM: Stand-up</p>
                                                    <p style={{marginLeft:"20px"}}>Stand-up is a classic developer team start to the day where issues, thoughts, and schedules are shared.</p>
                                                    <p>10:00 AM: Code practice</p>
                                                    <p style={{marginLeft:"20px"}}>There are specific problems which can be practiced in order to build coding competency and interview ability. We practice them daily.</p>
                                                    <p>11:00 AM: New Subject Matter</p>
                                                    <p style={{marginLeft:"20px"}}>We will be learning our new topics at this time specifically in an introduction and coaching style.</p>
                                                    <p>12:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>We have a fridge so participants can bring in meals, there are some options within walking distance, many places deliver, and there are a huge amount within driving distance.</p>
                                                    <p>1:30 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>Project based learning. Here we will be continuing with the new subject specifically in a hands on style.</p>
                                                    <p>3:00 PM: Lunch</p>
                                                    <p style={{marginLeft:"20px"}}>Old Material. At the end of the day we want to cover old topics that students feel they need to brush up on.</p>
                                                    <p>4:00 PM: End of day</p>
                                                    <p style={{marginLeft:"20px"}}>Participants frequently are working on an issue, new material, or a project and extend their day beyond 4:00 PM but this is the "offical" end of day.</p>
                                                </Col>
                                            </Row>
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
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                <p>This content is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks.</p>
                                                <p>We start with creating a development environment which will enable you to begin coding. This will include downloading & updaing NPM, downloading VS Code, and other similar tasks. We will practice file navigation and manipulation through terminal and get into creating our first JavaScript programs!</p>
                                                <p>We will begin by playing around with different JavaScript data types through hands on learning and experimenting with different data structures.</p>
                                                <p>We close out the week by learning about Git and GitHub.</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/rubypython.png" alt="" />
                                                </Col>
                                                <Col xs={10}md={9}>
                                                    <p>placeholder </p>
                                                </Col>
                                            </Row>
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
                    <Row>
                        <PartnersCarosel />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CurriculumContent;
