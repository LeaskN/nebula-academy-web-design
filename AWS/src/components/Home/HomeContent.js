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
                            <Card.Title>There is a growing demand for AWS Cloud literate employees</Card.Title>
                            <Card.Text>
                                The AWS Academy Cloud Foundations teaches overall understanding of cloud computing concetps, independent of specific technical roles.
                            </Card.Text>
                            <Button href="/registration" variant="success">Register Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>29% of IT decision-makers say they have trouble finding candidates with cloud computing skills.</Card.Title>
                            <Card.Text>
                                Unlock a world of opportunities with your AWS Cloud Literacy skills.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>121% Growth rate for job postings that include the term "Cloud Computing"</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12} xl={8} className="introRow2Tile1">
                    <Row className="overImage">
                        <Col xl={6}>
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>Curriculum</Card.Title>
                                    <Card.Text>
                                    Demonstrate your knowledge and showcase the skills you mastered in your AWS Academy coursework by pursuing an AWS Certification. AWS Academy students receive one free practice exam and a 50% discount on the AWS Certification exam.
                                    </Card.Text>
                                    <a href="/curriculum" className="linkLight">Click here to read more about curriculum.</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} >
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>Job Placement</Card.Title>
                                    <Card.Text>
                                    AWS Academy prepares you to enter the workforce as a qualified job candidate. The hands-on, real-world learning approach gives you the practical knowledge and skills needed to show what you know in an interview.
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
                            <h3 className="centralText">The average salary of an AWS-certified IT professional is $129,868 - ranking as one of the highest-paying certification categories in North America.</h3>
                            <h3 className="centralText">AWS Certifications Increase Tech Pay Up To $12K a year.</h3>
                            <p className="centralText">Source:&nbsp;
                                <a className="link centralText" target="empty" href="https://www.forbes.com/sites/louiscolumbus/2019/07/28/aws-certifications-increase-tech-pay-up-to-12k-a-year/#6d60d68d189c">
                                Forbes
                                </a>
                            </p>
                            <br/>
                        </Card>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className="introRow3Tile1 paddingRight">
                    <Card className="introRowTile">
                        <Card.Body className="overImage">
                            <Card.Title>Support</Card.Title>
                            <Card.Text>
                            Building a career in today's modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our support system and how you can begin your journey to build a sustainable career in technology.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="introRow3Tile2 paddingLeft">
                    <Card className="overImage introRowTile">
                        <Card.Body>
                            <Card.Title>More Info</Card.Title>
                            <Card.Text>
                            As you navigate our website we have included details regarding the overall program, what to expect from the experience, the learning outcomes, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued success post job placement. If you have additional questions that we have not answered please reach out to our team at succeed@nebulaacademyny.com.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>    
        </Container>      
    </React.Fragment>
)