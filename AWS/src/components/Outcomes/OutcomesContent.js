import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './OutcomesContent.css'


const OutcomesContent = () =>  (

            <React.Fragment>
                <Container>
                    <Row>
                            <h1 className="outcomesTitle">Outcomes</h1>
                            <div className="outcomesText">
                                <p>Everyone learns at a different pace, has different learning goals and career goals. At Nebula Academy we ensure our program meets diverse learning needs and provides participants with a path to a sustainable career in Information Technology.</p>
                                <p> As a research focused organization, we place our programs, our instructors, and our participants under ongoing evaluation to gain insight during, and after our programs. We know what our participants think of our instruction, our content, and our ability to support them in gaining a place in the workforce. Since we established the organization, we’ve collected feedback reports and implemented pre and post assessments to enable our team to continuously enhance our curriculum and our delivery methodology.</p>
                            </div>            
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Img className="outcomeImage" variant="top" src={require("../../assets/JobGrowth_graphs_1.png")} />
                                <a style={{textAlign:"center"}}className="outcomesLink" href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6"> View Source</a>
                            </Card>
                            <Card>
                                <Card.Img className="outcomeImage" href="" variant="top" src={require("../../assets/JobGrowth_graphs_2.png")} />
                                <a style={{textAlign:"center"}}className="outcomesLink" href="https://www.glassdoor.com/research/september-local-pay-reports/"> View Source</a>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Img className="outcomeImage" href="" variant="top" src={require("../../assets/JobGrowth_graphs_3.png")} />
                                <a style={{textAlign:"center"}}className="outcomesLink" href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6"> View Source</a>
                            </Card>
                            <Card>
                                <Card.Img className="outcomeImage" href="" variant="top" src={require("../../assets/JobGrowth_graphs_4.png")} />
                                <a style={{textAlign:"center"}}className="outcomesLink" href="https://money.usnews.com/careers/best-jobs/software-developer/salary"> View Source</a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
);

export default OutcomesContent;
