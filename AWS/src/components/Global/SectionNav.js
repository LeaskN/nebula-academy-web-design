import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionNav.css';

export const SectionNav = () => (
    <React.Fragment>
        <Container>
            <Row className="sections">
                <Col className="section"><a className="customLink" href="/" >Overview</a></Col>
                <Col className="section"><a className="customLink" href="/Courses" >Courses</a></Col>
                <Col className="section"><a className="customLink" href="/Curriculum" >Curriculum</a></Col>
                <Col className="section"><a className="customLink" href="/Universities" >Universities</a></Col>
            </Row>
        </Container>
    </React.Fragment>
)
