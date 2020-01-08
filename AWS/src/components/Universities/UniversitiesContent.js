import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './UniversitiesContent.css'


class UniversitiesContent extends Component {
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
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>The value of a blended education model</h1>
                        <p>Language for this needs to be developed.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>What University Leaders Say:</h1>
                        <p>This is a quote from a dean or something: "LOREM IPSUM"</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Why the evolution of education is important:</h1>
                        <p>This information needs to be developed: "LOREM IPSUM"</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </React.Fragment>
        )
    }
};

export default UniversitiesContent;
