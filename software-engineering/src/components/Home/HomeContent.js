import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './HomeContent.css';

export const HomeContent = () => (
    <React.Fragment>
        <Container style={{padding:"0px"}}>
            <Row className="introRow1">
                <Col xs={12} lg={12} xl={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile1">
                        <Card.ImgOverlay>
                            <h4>Learn to Code in 6 Months</h4>
                            <Card.Text>
                            Nebula Academy is a workforce accelerator that provides intensive learning programs for workforce readiness in entry level technology career roles. We work hand-in-hand with our industry and university partners to create programs that help working adults from all backgrounds and experience levels gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy. 
                            </Card.Text>
                            <Button href="/application" variant="success">Apply Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile2">
                        <Card.ImgOverlay>
                            <h4>Get a Technical Job in a Growing Field</h4>
                            <Card.Text>
                            The field is exponentially growing. According to the U.S. Bureau of Labor Statistics, software engineer jobs are projected to increase by 21% from 2018 to 2028.
                            </Card.Text>
                            <a className="link" href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm"> Source: bls.gov </a>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4}>
                    <Card className="row1Tile bg-dark text-white row1Tile3">
                        <Card.ImgOverlay>
                            <h4>Industry Starting Salaries are Strong</h4>
                            <Card.Text>
                            The national average salary for an Entry Level Software Engineer is $86,367 in United States, compared to a national average of entry level jobs at a salary of $40,013, according to Glassdoor.
                            </Card.Text>
                            <a className="link" href="https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm"> Source: Glassdoor </a>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className="introRow2">
                <Col xs ={12} md={6} xl={4}>
                    <Card className="row2Tile row2Tile1">
                        <Card className="text-white subTile subTile1">
                            <Card.ImgOverlay className="behindText">
                                <h4>Market-Driven Curriculum</h4>
                                <Card.Text>
                                Nebula Academy programs begin with the career goal in mind. At the national level, we engage with industry to understand challenges, translate them into skills, and deliver intense training to participants who graduate ready to make meaningful contributions to employers.
                                </Card.Text>
                                <a href="/curriculum" className="linkLight">Click here to read more about curriculum.</a>
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </Col>
                <Col xs ={12} md={6} xl={4}>
                    <Card className="row2Tile row2Tile2">
                        <Card className="text-white subTile subTile2">
                            <Card.ImgOverlay className="behindText">
                                <h4>Job Readiness</h4>
                                <Card.Text>
                                Our curriculum combines hard- and soft-skills training to teach participants how to work collaboratively, communicate across teams, and present themselves to employers. We incorporate career evaluations, career coaching, and interview preparation into every program we deliver. 
                                </Card.Text>
                                <a href="/outcomes" className="linkLight">Click here to read more about job readiness.</a>
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </Col>
                <Col  xs ={12} lg={12} xl={4}>
                    <Card className="row2Tile bg-dark text-white row2Tile3">
                        <Card.ImgOverlay className="hideImage">
                            <br/>
                            <h1 className="centralText">$62,910</h1>
                            <a className="link centralText" href="https://www.indeed.com/salaries/junior-software-engineer-Salaries">
                            Junior Software Engineer Salary
                            </a>
                            <h1 className="centralText">$106,395</h1>
                            <a className="link centralText" href="https://www.indeed.com/career/software-engineer/salaries">
                            Software Engineer Salary
                            </a>
                            <h1 className="centralText">$112,376</h1>
                            <a className="link centralText" href="https://www.indeed.com/career/full-stack-developer/salaries">
                            Full Stack Developer Salary
                            </a>
                            <h1 className="centralText">$128,817</h1>
                            <a className="link centralText" href="https://www.indeed.com/career/senior-software-engineer/salaries">
                            Senior Software Engineer Salary
                            </a>
                            <br/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row className="introRow3">
                <Col xs={12} md={6}>
                    <Card className="row3Tile row3Tile1">
                        <Card className="text-white row3Tile subTile subTile3">
                            <Card.ImgOverlay className="behindText">
                                <h4>Learner Support</h4>
                                <Card.Text>
                                Building a career in todays modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our scholarships and how you can begin your journey to build a sustainable career in Information Technology.
                                </Card.Text>
                                <Card.Text>Click here to read more about curriculum.</Card.Text>
                                <Button href="/scholarships" variant="success">Scholarships</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="row3Tile row3Tile2">
                        <Card className="text-white row3Tile row3Tile2 subTile subTile4">
                            <Card.ImgOverlay className="behindText">
                                <h4>More Info</h4>
                                <Card.Text>
                                As you navigate our website we have included details regarding the overall program, what to expect from the experience, the learning outcomes, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued success post job placement.  If you are additional questions that we have not answered please reach out to our team at succeed@nebulaacademy.com
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </Col>
            </Row>    
        </Container>      
    </React.Fragment>
)