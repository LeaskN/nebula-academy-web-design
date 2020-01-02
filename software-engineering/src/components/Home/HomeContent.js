import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './HomeContent.css';

export const HomeContent = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                <Card className="introRowTile">
                    <Card.Body>
                        <Card.Title>Learn To Code in 6 Months</Card.Title>
                        <Card.Text>
                            Nebula Academy is a workforce accelerator that provides intensive learning programs for workforce readiness in entry level technology career roles. We work hand-in-hand with our industry and university partners to create programs that help working adults from all backgrounds and experience levels gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy. 
                        </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4} className="introRow1Column3">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>Why Nebula Academy?</Card.Title>
                            <Card.Text>
                                <ul style={{listStyleType:"none"}}>
                                    <li>Earn the fastest growing industry certification to accelerate the employment process.</li>
                                    <li>Gain access to the CareerLeader Assessment. A fully integrated approach to self-assessment built on one's interests, motivators and skills.</li>
                                    <li>Multiple payment options such as Scholarships, Pay After Employment, and Extended Payment.</li>
                                    <li>Pending approval 1/6/20: All Nebula Academy participants will be able to earn college credits.</li>
                                </ul>  
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={12} xl={4} className="introRow1Column2">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>Industry Starting Salaries are Strong</Card.Title>
                            <Card.Text>
                                The national average salary for an Entry Level Software Engineer is $86,367 in United States, compared to a national average of entry level jobs at a salary of $40,013, according to Glassdoor.
                                The field is exponentially growing. According to the U.S. Bureau of Labor Statistics, software engineer jobs are projected to increase by 21% from 2018 to 2028.
                            </Card.Text>
                            <p><>Sources: </>
                                <a className="link" href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm">bls.gov</a> 
                                <> and </>
                                <a className="link" href="https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm">Glassdoor</a>
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
                                    <Card.Title>Market-Driven Curriculum</Card.Title>
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
                                    <Card.Title>Job Readiness</Card.Title>
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
                    <Card className=" bg-dark text-white row2Tile3">
                        <Card className="purpleBackground">
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
                        </Card>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className="row3Tile1">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>Learner Support</Card.Title>
                            <Card.Text>
                            Building a career in todays modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our scholarships and how you can begin your journey to build a sustainable career in Information Technology.
                            </Card.Text>
                            <Button href="/scholarships" variant="success">Scholarships</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="row3Tile2">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>More Info</Card.Title>
                            <Card.Text>
                            As you navigate our website we have included details regarding the overall program, what to expect from the experience, the learning outcomes, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued success post job placement. If you have additional questions that we have not answered please reach out to our team at succeed@nebulaacademyny.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>    
        </Container>      
    </React.Fragment>
)