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
    // link = `https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=category:Learning%20To%20Code`
    link = `mailto:succeed@nebulaacademy.com?subject=Try Coding!`
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
        let formattedDate = `${d}`.split(/(\d{5,}|[2-9](?=\d*[1-9])\d{3})/g)[0].split('Mon').join('Monday').split('Tues').join('Tuesday').split('Wed').join('Wednesday').split('Thurs').join('Thursday').split('Fri').join('Friday').split('Sat').join('Saturday').split('Sun').join('Sunday')
        this.link = `mailto:succeed@nebulaacademy.com?subject=Try Coding, ${formattedDate}`;
        return formattedDate;
    }

render() {
        return (
            <Row className="staticCard" style={{width:"87.5vw"}}>
                <Col xs={4} className="cardColumns">
                    <Card className="cardDeckLeft" style={{width:"87.5vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{marginBottom:"0px"}}>Next Event:</p>
                        <h1>{this.nextFriday()}</h1>
                        <br/>
                        <Button href={this.link} className="tryCodingButton" target="empty">Register for Free</Button>
                        <p>Please leave the subject as:<br/> Try Coding, {this.nextFriday()}(or your desired date)</p>
                    </Card>
                </Col>
                <Col xs={8} className="cardColumns">
                    <div className="tryCodingCard">
                        <h3 style={{color:'#0078d7'}}>Try Coding Workshops!</h3>
                        <p>Come and spend your day in a beginner level, crash course in front-end software engineering; what we don't see in web applications: data, information and structures. You'll get a glimpse into what a software developer does and learn...</p>
                        <p className="tryCodingP"><b>Participants must be over 17.</b></p>
                    </div>
                </Col>
            </Row>
        )
    }
};

export default TryCodingContent;