import React, { Component } from 'react';
import { Row, Col, Card, Button, Container, ButtonToolbar } from 'react-bootstrap';
import Conditions from "../Global/Conditions/Conditions.js";


import './HomeContent.css';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: [],
            show: false
        };
    }
render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Learn To Code in 3 Months</h3>
                                    <Card.Text>
                                        Nebula Academy is a workforce accelerator that provides intensive learning programs for workforce readiness in entry level technology career roles. We work hand-in-hand with our industry and university partners to create programs that help working adults from all backgrounds and experience levels gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy. 
                                    </Card.Text>
                                    <div id="spacer" ></div>
                                    <Button className="bottom contentCentered"  href="/application" variant="primary">Apply Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Why Nebula Academy?</h3>
                                        <ul>
                                            <li><b>Earn the <a className="linkLight" target="empty" href="https://aws.amazon.com/training/awsacademy/">fastest growing industry certification</a></b> to accelerate the employment process.</li>
                                            <li>Gain access to the <b><a className="linkLight" target="empty" href="http://careerleader.com/">Career Leader Assessment</a></b>. A fully integrated approach to self-assessment built on one's interests, motivators and skills.</li>
                                            <li><b>Multiple payment options</b> such as Scholarships, Pay After Employment, and Extended Payment.</li>
                                            <li><b>Pending approval:</b> All Nebula Academy participants will be able to earn college credits.</li>
                                            <li><b>100% Money Back Guarantee </b><a className="linkLight" href='#conditions'>(see conditions below)</a></li>
                                        </ul>  
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Get a Job in a Growing Field with Strong Starting Salaries</h3>
                                    <Card.Text>
                                        The national average salary for an Entry Level Software Engineer is $86,367 in United States, compared to a national average of entry level jobs at a salary of $40,013, according to Glassdoor.
                                        The field is exponentially growing. According to the U.S. Bureau of Labor Statistics, software engineer jobs are projected to increase by 21% from 2018 to 2028.
                                    </Card.Text>
                                    <p><>Sources: </>
                                        <a className="link" target="empty" href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm">bls.gov</a> 
                                        <> and </>
                                        <a className="link" target="empty" href="https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm">Glassdoor</a>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12} xl={8} className="introRow2Tile1">
                            <Row>
                                <Col xl={6}>
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <h3>Market-Driven Curriculum</h3>
                                            <Card.Text>
                                            Nebula Academy programs begin with the career goal in mind. At the national level, we engage with industry to understand challenges, translate them into skills, and deliver intense training to participants who graduate ready to make meaningful contributions to employers.
                                            </Card.Text>
                                            <a href="/curriculum" className="linkLight">Click here to read more about curriculum.</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <h3>Job Readiness</h3>
                                            <Card.Text>
                                            Our curriculum combines hard- and soft-skills training to teach participants how to work collaboratively, communicate across teams, and present themselves to employers. We incorporate career evaluations, career coaching, and interview preparation into every program we deliver. 
                                            </Card.Text>
                                            <a href="/outcomes" className="linkLight">Click here to read more about job readiness.</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col  xs={12} lg={12} xl={4}>
                            <Card className="bg-dark text-white">
                                <Card className="purpleBackground">
                                    <br/>
                                    <h1 className="centralText">$62,910</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/salaries/junior-software-engineer-Salaries">
                                    Junior Software Engineer Salary
                                    </a>
                                    <h1 className="centralText">$106,395</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/career/software-engineer/salaries">
                                    Software Engineer Salary
                                    </a>
                                    <h1 className="centralText">$112,376</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/career/full-stack-developer/salaries">
                                    Full Stack Developer Salary
                                    </a>
                                    <h1 id="conditions" className="centralText">$128,817</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/career/senior-software-engineer/salaries">
                                    Senior Software Engineer Salary
                                    </a>
                                    <br/>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="introRow1Column1">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Try before you buy!</h3>
                                    <p>Want to learn to code? Thinking of joining a coding bootcamp but want to give it a try first? Come and give it a <b>free 1 hour try with us!</b> </p>
                                    <p>Participants will have the opportunity to try coding for free. We will build a personal website and give students the opportunity to get to know the basics of HTML, CSS and JavaScript</p>
                                    <p>Any participants that decide on the day to sign up for our 3 month full-time or 6 month part-time Software Engineering bootcamps will receive a $1000 discount. Any participants that attend and decide to sign up in the future will receive a $500 discount.</p>
                                    <div id="spacer" ></div>
                                    <Button className="bottom contentCentered" href="/trycoding" variant="primary">Try Coding</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}  className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>100% refund available!</h3>
                                    <p>Our goals are to get you educated, skillful, and employed. Click below to see how participants can remain eligible for the guarantee. <b>If we don't enable a participant to land an interview they are eligible to a full refund.</b></p> 
                                    <p>There are software engineering jobs that need to be filled and we are teaching participants the appropriate skills that if they want to get hired, they will.</p>
                                    <p>Check out our 7 simple and achievable conditions below!</p>
                                    <div id="spacer" ></div>
                                    <ButtonToolbar className="bottom contentCentered" >
                                        <Conditions/>                                        
                                    </ButtonToolbar>  
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} className="introRow3Tile1 paddingRight">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Learner Support</h3>
                                    <Card.Text>
                                    Building a career in today's modern workforce is challenging, and sometimes can be overwhelming to move through change. Our team of on-site and online personnel are there to help. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically and computationally, to build strong problem-solving skills, on overcoming adversity, and to build confidence in entering careers in the modern workforce. Learn about our scholarships and how you can begin your journey to build a sustainable career in Information Technology.
                                    </Card.Text>
                                    <div id="spacer" ></div>
                                    <Button className="bottom contentCentered" href="/scholarships" variant="primary">Scholarships</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} className="introRow3Tile2 paddingLeft">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>More Info</h3>
                                    <Card.Text>
                                    As you navigate through our website, you'll find details regarding the overall program, what to expect from the experience, the learning outcomes, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued primary post-job placement. If you have additional questions that we have not answered, please reach out to our team at succeed@nebulaacademyny.com.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>    
                </Container>      
            </React.Fragment>
            )

    }
};

export default HomeContent;