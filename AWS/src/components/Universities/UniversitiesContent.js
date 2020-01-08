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
                        <h3>Embedding “Stacking” Industry and Professional Certifications within Higher Education</h3>
                        <p>The top three benefits to embedding or stacking industry and professional certifications in higher education are 1) students can complete both academic credential and industry/professional-recognized certification, 2) helps keep college/ university curriculum up-to-date with industry standards, and 3) employers get students trained to their specifications or their various tools.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h3>Industry Certifications are the norm in the modern workforce</h3>
                        <p>There is growing interest in the certifications awarded by industry and professional associations. Today some 3.3 million Americans between the ages of 25 and 64 hold a job-related certification as their highest post-secondary credential (Lumina Foundation Strategic Plan 2017-2020). These certifications are not typically tied to a specific educational program; rather, they are awarded through direct assessment and validation of skills in cooperation with a business, trade association or another industry group.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h3>Reducing the gap between Higher Education and Industry needs</h3>
                        <p>Nebula Academy bridges the gap between industry and colleges and universities to embed or “stack” industry certifications within higher education courses and/or programs. Our model of embedding certifications in educational programs allows learners to simultaneously obtain one or more marketable industry/professional certifications, along with their degree at graduation.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <p className="centralText">Source:&nbsp;
                            <a className="link centralText" href="https://www.luminafoundation.org/files/resources/report-on-phase-i-study-embedding-industry-professional-certifications-within-higher-education-january-2017.pdf">
                            Lumina Foundation
                            </a>
                        </p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </React.Fragment>
        )
    }
};

export default UniversitiesContent;
