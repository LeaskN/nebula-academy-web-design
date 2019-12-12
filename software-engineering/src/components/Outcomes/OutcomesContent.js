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
                                <p>Our goal is to land you a job in a software engineering related role soon after graduation.</p>
                                <p>On average entry-level software engineers make ____. On average entry-level software engineers on LI make______. </p>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Img variant="top" src={require("../../assets/JobGrowth_graphs_1.png")} />
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require("../../assets/JobGrowth_graphs_2.png")} />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Img variant="top" src={require("../../assets/JobGrowth_graphs_3.png")} />
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={require("../../assets/JobGrowth_graphs_4.png")} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default OutcomesContent;
