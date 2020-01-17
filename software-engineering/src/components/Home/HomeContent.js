import React from 'react';
import { Row, Col, Card, Button, Container, ButtonToolbar, OverlayTrigger, Popover } from 'react-bootstrap';
import './HomeContent.css';

export const HomeContent = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                    <Card className="introRowTile">
                        <Card.Body>
                            <h3>Learn To Code in 6 Months</h3>
                            <Card.Text>
                                Nebula Academy is a workforce accelerator that provides intensive learning programs for workforce readiness in entry level technology career roles. We work hand-in-hand with our industry and university partners to create programs that help working adults from all backgrounds and experience levels gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy. 
                            </Card.Text>
                            <Button href="/application" variant="success">Apply Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                    <Card className="introRowTile">
                        <Card.Body>
                            <h3>Why Nebula Academy?</h3>
                                <ul style={{listStyleType:"none"}}>
                                    <li><b>Earn the <a className="link" href="https://aws.amazon.com/training/awsacademy/">fastest growing industry certification</a></b> to accelerate the employment process.</li>
                                    <li>Gain access to the <b><a className="link" href="http://careerleader.com/">Career Leader Assessment</a></b>. A fully integrated approach to self-assessment built on one's interests, motivators and skills.</li>
                                    <li><b>Multiple payment options</b> such as Scholarships, Pay After Employment, and Extended Payment.</li>
                                    <li><b>Pending approval 6/1/20:</b> All Nebula Academy participants will be able to earn college credits.</li>
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
                <Col xs={12} className='introRowTile'>
                    <Card className="guarantee">
                        <h2>100% refund if you don't land interviews!</h2>
                            <p>Our goals are to get you educated, skillful, and employed. In our conditions below we outline the metrics that make participants eligible for the guarantee. If and we don't enable you to get an interview you're eligible to a full refund! We know that the market is NOT saturated with software engineers and that we are teaching you the appropriate skills that if you want to get hired, you will.</p>
                            <p>Check out our 9 simple and achievable conditions below!</p>
                            <div className="contentCentered">
                                <ButtonToolbar>
                                    {<OverlayTrigger
                                        trigger="click"
                                        key='top'
                                        placement='top'
                                        overlay={
                                            <Popover id={`popover-positioned-top`}>
                                            <Popover.Title><h4>For the final two weeks of the program the following must be accomplished each day:</h4></Popover.Title>
                                            <Popover.Title>
                                            <h5>Project & Certification Conditions:</h5>
                                            <ol>
                                                <li>Pass your AWS Cloud Practitioner exam</li>
                                                <li>Five live projects assessed</li>
                                                <li>All project assessments passed at a minimum of 80% (can be re-taken)</li>
                                                <li>Resume submitted, reviewed, and approved by program manager</li>
                                            </ol>
                                            <h5>For the final two weeks of the program the following must be accomplished each day:</h5>
                                            <ol>
                                                <li>20 One click applications</li>
                                                <li>10 LinkedIn applications</li>
                                                <li>2 Industry website application</li>
                                            </ol>
                                            </Popover.Title>
                                            </Popover>
                                        }
                                        >
                                        <Button variant="secondary">Conditions</Button>
                                        </OverlayTrigger>}
                                </ButtonToolbar>  
                            </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className="introRow3Tile1 paddingRight">
                    <Card className="introRowTile">
                        <Card.Body>
                            <h3>Learner Support</h3>
                            <Card.Text>
                            Building a career in todays modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our scholarships and how you can begin your journey to build a sustainable career in Information Technology.
                            </Card.Text>
                            <Button href="/scholarships" variant="success">Scholarships</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="introRow3Tile2 paddingLeft">
                    <Card className="introRowTile">
                        <Card.Body>
                            <h3>More Info</h3>
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

