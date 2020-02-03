import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './UniversitiesContent.css';

class Universities extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
render() {
        return (
            <React.Fragment>
                <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                        <Col className="UniversitiesUrlCard">
                            <h1>Certifications Within Higher Education</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://aws.nebulaacademy.com" target="blank" variant="secondary">AWS</Button>
                        </Col>
                        <Col className="UniversitiesUrlCard">
                            <h1>Certifications in the Workplace</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://aws.nebulaacademy.com" target="blank" variant="secondary">AWS</Button>
                        </Col>
                        <Col className="UniversitiesUrlCard">
                            <h1>Bridge Higher Education and Industry</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://code.nebulaacademy.com" target="blank" variant="secondary">Bootcamp</Button>
                        </Col>
                    </Row>
                    <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                        <Col></Col>
                        <Col className="UniversitiesUrlCard" style={{borderColor: '#ff9900'}}>
                            <h1>Additional AWS Information</h1>
                            <p>Please feel free to download our flyer, infographs, or our full AWS brochure</p>
                            <Row className="contentCentered">
                                <Button style={{margin: '10px'}} href="https://code.nebulaacademy.com" target="blank" variant="warning">Flyer</Button>
                                <Button style={{margin: '10px'}} href="https://code.nebulaacademy.com" target="blank" variant="warning">Infograph1</Button>
                                <Button style={{margin: '10px'}} href="https://code.nebulaacademy.com" target="blank" variant="warning">Infograph2</Button>
                                <Button style={{margin: '10px'}} href="https://code.nebulaacademy.com" target="blank" variant="warning">Full AWS Brochure</Button>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
            </React.Fragment>
        )
    }
};

export default Universities;