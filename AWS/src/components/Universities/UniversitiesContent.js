import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './UniversitiesContent.css'
import OutcomesContent from '../Outcomes/OutcomesContent';

export const  UniversitiesContent  = () => (
            <React.Fragment>
                <div className="outcomesContainer"> 
                    <OutcomesContent/> 
                </div>
                    <div className="contentContainer"> 
                        <Row>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>There is a growing demand for AWS Cloud literate employees</Card.Title>
                                    <Card.Text>
                                        The AWS Academy Cloud Foundations teaches overall understanding of cloud computing concepts, independent of specific technical roles.
                                    </Card.Text>
                                    <Row className="contentCentered" >
                                        <Col>
                                            
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>29% of IT decision-makers say they have trouble finding candidates with cloud computing skills.</Card.Title>
                                    <p>Quick Read: <a className="linkWhite" target="blank" href="https://aws.amazon.com/blogs/publicsector/a-commitment-to-training-learning-pathways-to-real-world-jobs-with-aws-educate/">Unlock a world of opportunities with your AWS Cloud Literacy skills.</a></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>Is an AWS Certification Important to Your Career?</Card.Title>
                                    <p>AWS certification training has increased the salaries for the average certified professional by as much as 25.9%.</p>
                                    <p>Source: <a className="linkLight" target="blank" href="http://techgenix.com/aws-certification/">TechGenix Editorial</a></p>
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
                                            <Card.Title>Embedding “Stacking” Industry and Professional Certifications within Higher Education</Card.Title>
                                            <Card.Text>
                                            The top three benefits to embedding or stacking industry and professional certifications in higher education are 1) students can complete both academic credential and industry/professional-recognized certification, 2) helps keep college/ university curriculum up-to-date with industry standards, and 3) employers get students trained to their specifications or their various tools.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} >
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <Card.Title>
                                                Industry Certifications are the norm in the modern workforce
                                            </Card.Title>
                                            <Card.Text>
                                            There is growing interest in the certifications awarded by industry and professional associations. Today some 3.3 million Americans between the ages of 25 and 64 hold a job-related certification as their highest post-secondary credential (Lumina Foundation Strategic Plan 2017-2020). These certifications are not typically tied to a specific educational program; rather, they are awarded through direct assessment and validation of skills in cooperation with a business, trade association or another industry group.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col  xs={12} lg={12} xl={4}>
                            <Card className="bg-dark text-white">
                                <Card className="universityCard5">
                                    <br/>
                                    <div className="spacer"></div>
                                    <h4 className="centralText">The average salary of an AWS-certified IT professional is $129,868 - ranking as one of the highest-paying certification categories in North America.</h4>
                                    <h4 className="centralText">AWS Certifications Increase Tech Pay Up To $12K a year.</h4>
                                    <p className="centralText">Source:&nbsp;
                                        <a className="linkWhite centralText" target="empty" href="https://www.forbes.com/sites/louiscolumbus/2019/07/28/aws-certifications-increase-tech-pay-up-to-12k-a-year/#6d60d68d189c">Forbes</a>
                                    </p>
                                    <br/>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={14} className="introRow3Tile1">
                            <Card className="introRowTile">
                                <Card.Body className="overImage">
                                    <Card.Title>Reducing the gap between Higher Education and Industry needs</Card.Title>
                                    <Card.Text>
                                    Nebula Academy bridges the gap between industry and colleges and universities to embed or “stack” industry certifications within higher education courses and/or programs. Our model of embedding certifications in educational programs allows learners to simultaneously obtain one or more marketable industry/professional certifications, along with their degree at graduation.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>    
                </div>
            </React.Fragment>
);

export default UniversitiesContent;
