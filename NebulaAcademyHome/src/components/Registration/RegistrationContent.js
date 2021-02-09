import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './RegistrationContent.css';
import uniImage from '../../assets/UniCollegePicture2.jpg'
import uniImage2 from '../../assets/UniDevOps.jpg'



class Registration extends Component {
    render() {
        return (
            <React.Fragment>
                <Row style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                        <Col className="registrationCard" style={{backgroundColor:'#8E5EA5', color: 'white', paddingLeft: '10px', border: '3px solid white'}}>
                            <h2 style={{ fontSize: '1.9rem' }}>About this event</h2>
                                <blockquote  style={{fontStyle:'normal', height: '80%', alignItems:'center'}}>{this.props.data.aboutTheEvent}</blockquote>
                        </Col>
                        <Col className="registrationCard">
                            <h2 style={{ fontSize: '1.9rem' }}>Learning Objectives</h2>
                            <blockquote  style={{fontStyle:'normal'}}>
                                    <ul className="learningObjectivesList">
                                        {this.props.data.learningObjectives.map((ele,i) => <li key={i}>{ele}</li>)}
                                    </ul>
                                </blockquote>
                        </Col>
                        <Col className="registrationCard" style={{backgroundColor:'#8E5EA5', color: 'white', border: '3px solid white'}}>
                            <h2 style={{ fontSize: '1.9rem' }}>Workshop Overview</h2>
                            <blockquote  style={{fontStyle:'normal'}}>{this.props.data.workshopOverview}</blockquote>
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '10vw', marginRight: '10vw' }}>
                        <Col className="registrationCard" style={{ borderColor: '#ff9900' }}>
                            <h2 style={{ fontSize: '1.9rem' }}>Potential Salary Information</h2>
                            {this.props.data.salaries.map((ele, i) =><h3 key={i}>{ele.title}: {ele.salary} <a href={`${ele.source}`} style={{fontWeight:'200'}} key={i} target='blank'>source</a></h3>)}
                        </Col>
                    </Row>
                    <Row style={{ borderColor: '#ff9900', marginLeft: '10vw', marginRight: '10vw' }}>
                        <Col className="registrationCard" style={{ minHeight:'200px', backgroundImage: "url(" + uniImage + ")" }}></Col>
                        <Col className="registrationCard" style={{ minHeight:'200px', backgroundImage: "url(" + uniImage2 + ")", backgroundSize:'cover' }}></Col>
                    </Row>
            </React.Fragment>
        )
    }
};

export default Registration;