import React, { Component } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import './InternshipsContent.css'


class InternshipsContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }
    };
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Internship Opportunities & Workforce Development</h1>
                        <p>Through our partnership with industry companies and a diverse portfolio of businesses we offer internships to participants to build their capacity by demonstrating their knowledges gained through our programs. Internships are an opportunity to engage with companies and prove knowledge and skills to gain employment. </p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row style={{ display:'flex', justifyContent: 'center',  }}>
                    <Button href="/curriculum">Career Readiness</Button>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Why Are Internships Important?</h1>
                        <p>An internship enables participants to gain first-hand exposure of working in the real world. It also allows participants the ability to harness the skill, knowledge, and lab practice they learnt in our program. Internships provide the opportunity for participants to demonstrate the value they can contribute to employers immediately after completion of our program.  We guarantee each participant in our program an internship opportunity so that they can build the confidence and build their portfolio for gaining employment.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row style={{ display:'flex', justifyContent: 'center',  }}>
                    <Button href="/guestspeakers">View Guest Speakers</Button>
                </Row>
            </React.Fragment>
        )
    }
};

export default InternshipsContent;
