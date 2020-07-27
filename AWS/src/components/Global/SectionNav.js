import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SectionNav.css';
console.log(window.location.href.split('/')[window.location.href.split('/').length-1])
export const SectionNav = () => (
    <React.Fragment>
        <Container>
            <Row className="sections">
                {(window.location.href.split('/')[window.location.href.split('/').length-1]) === ''? <Col className="section current"><a className="customLink" href="/">Student</a></Col> : <Col className="section"><a className="customLink" href="/">Student</a></Col>}
                {/* {window.location.href.indexOf('Curriculum') > -1? <Col className="section current"><a className="customLink" href="/Curriculum">Curriculum</a></Col> : <Col className="section"><a className="customLink" href="/Curriculum">Curriculum</a></Col>}
                {window.location.href.indexOf('Courses') > -1? <Col className="section current"><a className="customLink" href="/Courses">Courses</a></Col> : <Col className="section"><a className="customLink" href="/Courses">Courses</a></Col>} */}
                {window.location.href.indexOf('Educator') > -1? <Col className="section current"><a className="customLink" href="/Educator">Educator</a></Col> : <Col className="section"><a className="customLink" href="/Educator">Educator</a></Col>}
                {window.location.href.indexOf('Registration') > -1? <Col className="section current"><a className="customLink" href="/Registration">Register</a></Col> : <Col className="section"><a className="customLink" href="/Registration">Register</a></Col>}

            </Row>
        </Container>
    </React.Fragment>
)
