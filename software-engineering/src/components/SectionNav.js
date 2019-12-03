import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './SectionNav.css';

export const SectionNav = () => (
    <React.Fragment>
            <Row className="sections">
                <Col className="section">Overview</Col>
                <Col className="section">Program</Col>
                <Col className="section">Curriculum</Col>
                <Col className="section">Internships</Col>
                <Col className="section">Outcomes</Col>
            </Row>
    </React.Fragment>
)