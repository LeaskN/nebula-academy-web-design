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
    link = `https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=15679218`
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
        this.link = `https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=15679218`;
        return formattedDate;
    }

render() {
        return (
            <Row className="staticCard" style={{width:"87.5vw"}}>
                <Col xs={4}>
                    <Card className="cardDeckLeft" style={{display: "flex", justifyContent: "space-evenly"}}>
                        <p style={{marginBottom:"0px"}}>Next Event:</p>
                        <h1>{this.nextFriday()}</h1>
                        <Button href={this.link} className="tryCodingButton" target="empty">Register for Free</Button>
                        {/* <p>Please leave the subject as:<br/> Try Coding, {this.nextFriday()}(or your desired date)</p> */}
                    </Card>
                </Col>
                <Col xs={8} className="cardColumns">
                    <div className="tryCodingCard">
                        <h3 style={{color:'#0078d7'}}>Try Coding Workshops!</h3>
                        <p>Many of us feel lured into tech & software development but dont understand what it may entail. Come to our workshop and quickly build an app with one of our experienced software engineering instructors!</p>
                        <p>This is a free one hour workshop where you can ask questions and follow along with an instructor to build a fun project!</p>
                        <p className="tryCodingP"><b>Participants must be over 17.</b></p>
                    </div>
                </Col>
            </Row>
        )
    }
};

export default TryCodingContent;