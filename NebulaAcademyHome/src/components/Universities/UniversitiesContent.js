import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import AWS_Brochure from '../../assets/AWS_Brochure.pdf'
import AWS_Flyer from '../../assets/AWS_Flyer.pdf'
import AWS_Student_Infographic from '../../assets/AWS_Student_Infographic.pdf'
import AWS_University_Infographic from '../../assets/AWS_University_Infographic.pdf'

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
                                <Button style={{margin: '10px'}} href={AWS_Brochure} target="blank" download variant="warning">Flyer</Button>
                                <Button style={{margin: '10px'}} href={AWS_Flyer} target="blank" download variant="warning">Infograph1</Button>
                                <Button style={{margin: '10px'}} href={AWS_Student_Infographic} target="blank" download variant="warning">Infograph2</Button>
                                <Button style={{margin: '10px'}} href={AWS_University_Infographic} target="blank" download variant="warning">Full AWS Brochure</Button>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
            </React.Fragment>
        )
    }
};

export default Universities;