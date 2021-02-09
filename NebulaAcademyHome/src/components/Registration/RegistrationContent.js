import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import AWS_Brochure from '../../assets/AWS_Brochure.pdf'
import AWS_Flyer from '../../assets/AWS_Flyer.pdf'
import AWS_Student_Infographic from '../../assets/AWS_Student_Infographic.pdf'
import AWS_University_Infographic from '../../assets/AWS_University_Infographic.pdf'

import './RegistrationContent.css';
import uniImage from '../../assets/UniCollegePicture2.jpg'
import uniImage2 from '../../assets/UniDevOps.jpg'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
render() {
        return (
            <React.Fragment>
                <Row style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                        <Col className="registrationUrlCard" style={{backgroundColor:'#8E5EA5', color: 'white', paddingLeft: '10px', border: '3px solid white'}}>
                            <h2 style={{ fontSize: '1.9rem' }}>Certifications in the Workplace</h2>
                            <blockquote>"Companies are actively seeking job applicants with AWS Cloud Computing skills. 58% of employees request AWS skills by name in listings that require 'cloud computing' skill. Nebula Academy offers AWS-authored courses that will help you become AWS Cloud literate and master the in-demand skills that hiring companies need most."</blockquote>
                            <a className="linkLight" href="https://searchcloudcomputing.techtarget.com/feature/Are-you-on-the-right-cloud-computing-career-path">Source: Search Cloud Computing</a>
                        </Col>
                        <Col className="registrationUrlCard">
                            <h2 style={{ fontSize: '1.9rem' }}>Certifications Within Higher Education</h2>
                            <blockquote>"AWS Academy provides higher education institutions with a ready-to-teach cloud computing curriculum that prepares students to pursue industry-recognized certifications and in-demand cloud jobs. Our curriculum helps educators stay at the forefront of AWS Cloud innovation so that they can equip students with the skills they need to get hired in one of the fastest-growing industries."</blockquote>
                            <a className="link" href="https://aws.amazon.com/training/awsacademy/">Source: AWS Academy</a>
                        </Col>
                        <Col className="registrationUrlCard" style={{backgroundColor:'#8E5EA5', color: 'white', border: '3px solid white'}}>
                            <h2 style={{ fontSize: '1.9rem' }}>Bridge Higher Education and Industry</h2>
                            <blockquote >"The biggest issue we face is industry telling us we're not doing enough to prepare our students for the workforce. Which is frustrating because our dilemma is that industry is not investing enough in us to be able to prepare our students"</blockquote>
                            <>
                                <p style={{ lineHeight:'3px', fontWeight:'bold' }}>Caron Hobin</p>
                                <p style={{ lineHeight:'3px', fontWeight:'bold' }}>VP for strategic alliances</p>
                                <p style={{ lineHeight:'3px', fontWeight:'bold' }}>Baypath University</p>
                            </>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                        <Col className="registrationUrlCard" style={{ backgroundImage: "url(" + uniImage + ")" }}></Col>
                        <Col className="registrationUrlCard" style={{ borderColor: '#ff9900' }}>
                            <h2 style={{ fontSize: '1.9rem' }}>Additional AWS Information</h2>
                            <p>Please feel free to download and share the following infomation with students, teachers, and administration.</p>
                            <Row className="contentCentered">
                                <Col>
                                    <Button style={{ margin: '10px', whiteSpace:'nowrap' }} href={ AWS_Flyer } target="blank" download variant="warning">AWS One-Page Flyer</Button>
                                </Col>
                                <Col>
                                    <Button style={{ margin: '10px', whiteSpace:'nowrap' }} href={ AWS_Brochure } target="blank" download variant="warning">AWS Full Brochure</Button>
                                </Col>
                                <Col>
                                    <Button style={{ margin: '10px', whiteSpace:'nowrap' }} href={ AWS_Student_Infographic } target="blank" download variant="warning">Student Infograph</Button>
                                </Col>
                                <Col>
                                    <Button style={{ margin: '10px', whiteSpace:'nowrap' }} href={ AWS_University_Infographic } target="blank" download variant="warning">University Infograph</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="registrationUrlCard" style={{  backgroundImage: "url(" + uniImage2 + ")" }}></Col>
                    </Row>
            </React.Fragment>
        )
    }
};

export default Registration;