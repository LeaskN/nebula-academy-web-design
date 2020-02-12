import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

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
                                    <h3>There are 26k schools in the US and less than half teach Computer Science</h3>
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
                                    <h3>Jobs Quote</h3>
                                        <ul>
                                            <li>Jobs Quote Description</li>
                                        </ul>  
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Build your own capacity to deliver summer/in school programs</h3>
                                    <Card.Text>
                                        Description needed: Summer camps bring in $ to schools?
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
                                            <h3>Employment Opportunities</h3>
                                            <Card.Text>
                                            Filler Description Text
                                            </Card.Text>
                                            <a href="/curriculum" className="linkLight">Click here to read more about curriculum.</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <h3>CTLE</h3>
                                            <Card.Text>
                                            Filler CTLE Description TEXT
                                            </Card.Text>
                                            <a href="/careers" className="linkLight">Click here to read more about job readiness.</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col  xs={12} lg={12} xl={4}>
                            <Card className="bg-dark text-white">
                                <Card className="purpleBackground" style={{padding:'10px'}}>
                                    <br/>
                                    <h1 className="centralText">Schools: (Indeed) Need for CS teachers</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/salaries/junior-software-engineer-Salaries">
                                    Junior Software Engineer Salary
                                    </a>
                                    <h1 className="centralText">Teachers: Increase your salary and marketability</h1>
                                    <a className="link centralText" target="empty" href="https://www.indeed.com/career/software-engineer/salaries">
                                    Software Engineer Salary
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
                                    <h3>Scholarships</h3>
                                    <p>(CHECK THIS TEXT) Building a career in today's modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our scholarships and how you can begin your journey to build a sustainable career in Information Technology.</p>
                                    <p>Learn more about Scholarship opportunities:</p>
                                    <div id="spacer" ></div>
                                    <Button className="bottom contentCentered" href="/scholarships" variant="primary">Scholarships</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}  className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>More Info</h3>
                                    <p>As you navigate our website we have included details regarding the overall program, what to expect from the experience, the learning careers, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued success post job placement. If you have additional questions that we have not answered please reach out to our team at succeed@nebulaacademyny.com</p> 
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
                                    As you navigate through our website, you'll find details regarding the overall program, what to expect from the experience, the learning careers, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued primary post-job placement. If you have additional questions that we have not answered, please reach out to our team at succeed@nebulaacademyny.com.
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