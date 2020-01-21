import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import './TryCodingContent.css';

class TryCodingContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: []
        };
    }
    link = `https://nebulaacademycoding.eventbrite.com`
render() {
        return (
            <Row className="staticCard" style={{width:"87.5vw"}}>
                <Col xs={4} className="cardColumns">
                    <Card className="cardDeckLeft" style={{width:"87.5vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{marginBottom:"0px"}}>Next Event:</p>
                        <h1>Feb 7<sup>th</sup></h1>
                        <br/>
                        <Button href={this.link} target="empty">Join Free Event</Button>
                    </Card>
                </Col>
                <Col xs={8} className="cardColumns offWhite">
                    <Card style={{padding: "10px"}}>
                        <h3><a href={this.link}>Try Coding Workshop 2.7.2020</a></h3>
                        <p>Spend your day in a beginner level, crash course in back-end engineering; what we don't see in web applications: data, information and structures. You'll get a glimpse into what a back-end software developer does and learn...<a href={this.link} target="empty">learn more</a></p>
                        <p><span role="img" aria-label="pin">📍</span><a target="empty" href="https://www.google.com/maps/place/Nebula+Academy/@40.8042109,-73.5183472,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2813b158c5423:0x81578d2a8861e473!8m2!3d40.8042109!4d-73.5161585">Nebula Academy, 180 Micheal Drive, NY 11791</a></p>
                    </Card>
                </Col>
            </Row>
        )
    }
};

export default TryCodingContent;