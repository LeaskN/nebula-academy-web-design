import React, { Component } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './OutcomesContent.css'


class OutcomesContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }
    };
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h1>Outcomes</h1>
                            <Col sm={10} style={{marginLeft:"30px"}}>
                                <p>Everyone learns at a different pace, has different learning goals and career goals. At Nebula Academy we ensure our program meets diverse learning needs and provides participants with a path to a sustainable career in Information Technology.</p>
                                <p> As a research focused organization, we place our programs, our instructors, and our participants under ongoing evaluation to gain insight during, and after our programs. We know what our participants think of our instruction, our content, and our ability to support them in gaining a place in the workforce. Since we established the organization, we’ve collected feedback reports and implemented pre and post assessments to enable our team to continuously enhance our curriculum and our delivery methodology.</p>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={{ height: "100%"}}>
                            <Card>
                                <Card.Img variant="top" src={require("../../assets/JobGrowth_graphs_1.png")} />
                                <a style={{textAlign:"center"}} className="link" href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6"> View Source</a>
                            </Card>
                            <Card>
                                <Card.Img href="" variant="top" src={require("../../assets/JobGrowth_graphs_2.png")} />
                                <a style={{textAlign:"center"}} className="link" href="https://www.glassdoor.com/research/september-local-pay-reports/"> View Source</a>
                            </Card>
                        </Col>
                        <Col md={6} style={{ height: "100%"}}>
                            <Card>
                                <Card.Img href="" variant="top" src={require("../../assets/JobGrowth_graphs_3.png")} />
                                <a style={{textAlign:"center"}} className="link" href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6"> View Source</a>
                            </Card>
                            <Card>
                                <Card.Img href="" variant="top" src={require("../../assets/JobGrowth_graphs_4.png")} />
                                <a style={{textAlign:"center"}} className="link" href="https://money.usnews.com/careers/best-jobs/software-developer/salary"> View Source</a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default OutcomesContent;
