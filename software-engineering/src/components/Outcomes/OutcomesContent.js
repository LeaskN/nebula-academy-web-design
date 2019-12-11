import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
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
                            <Col sm={10}>
                                <p>Our goal is to land you a job in a software engineering related role soon after graduation.</p>
                                <p>On average entry-level software engineers make ____. On average entry-level software engineers on LI make______. </p>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="dataBox"></div>
                            <div className="dataBox"></div>
                        </Col>
                        <Col md={6}>
                            <div className="dataBox"></div>
                            <div className="dataBox"></div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default OutcomesContent;
