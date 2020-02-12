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
    nextFriday = () => {
        var d = new Date();

        switch (d.getDay())
        {
        case 0: d.setDate(d.getDate() + 5);
        break;

        case 1: d.setDate(d.getDate() + 4);
        break;

        case 2: d.setDate(d.getDate() + 3);
        break;

        case 3: d.setDate(d.getDate() + 2);
        break;

        case 4: d.setDate(d.getDate() + 1);
        break;

        case 6: d.setDate(d.getDate() + 6);
        break;

        default:
        }
        let formattedDate = ` ${d}`.split('2020')[0].split('Mon').join('Monday').split('Tues').join('Tuesday').split('Wed').join('Wednesday').split('Thurs').join('Thursday').split('Fri').join('Friday').split('Sat').join('Saturday').split('Sun').join('Sunday')
        return formattedDate;

    }
render() {
        return (
            <Row className="staticCard" style={{width:"87.5vw"}}>
                <Col xs={4} className="cardColumns">
                    <Card className="cardDeckLeft" style={{width:"87.5vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{marginBottom:"0px"}}>Next Event:</p>
                        <h1>{this.nextFriday().split('Monday').join('').split('Tuesday').join('').split('Wednesday').join('').split('Thursday').join('').split('Friday').join('').split('Saturday').join('').split('Sunday').join('')}<sup>th</sup></h1>
                        <br/>
                        <Button href={this.link} target="empty">Join Free Event</Button>
                    </Card>
                </Col>
                <Col xs={8} className="cardColumns offWhite">
                    <Card style={{padding: "10px"}}>
                        <h3><a href={this.link} target="empty">Try Coding Workshops are every Friday!</a></h3>
                        <p>Come and spend your day in a beginner level, crash course in front-end software engineering; what we don't see in web applications: data, information and structures. You'll get a glimpse into what a software developer does and learn...<a href={this.link} target="empty">learn more</a></p>
                        <p><b>Participants must be over 17 to participate.</b></p>
                        <p><a target="empty" href="https://www.google.com/maps/place/Nebula+Academy/@40.8042109,-73.5183472,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2813b158c5423:0x81578d2a8861e473!8m2!3d40.8042109!4d-73.5161585">Nebula Academy, 180 Micheal Drive, NY 11791</a><span role="img" aria-label="pin">📍</span></p>
                    </Card>
                </Col>
            </Row>
        )
    }
};

export default TryCodingContent;