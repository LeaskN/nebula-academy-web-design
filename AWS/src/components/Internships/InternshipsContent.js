import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        {/* <h1>What Sponsors Say:</h1>
                        <p> THIS TEXT NEEDS TO BE CHANGED: The primary focus of this program is to have participants land jobs in coding & technology oriented roles. There are different paths that one can take to achieve this goal but the most consistent is through internship opportunities. We are partnered with many local companies who are looking for software engineering interns. These roles frequently lead to job placement within that company or open up new avenues towards full time employment elsewhere.</p> */}
                        <h1>Why Are Internships Important?</h1>
                        <p>An internship enables participants to gain first-hand exposure of working in the real world. It also allows participants the ability to harness the skill, knowledge, and lab practice they learnt in our program. Internships provide the opportunity for participants to demonstrate the value they can contribute to employers immediately after completion of our program.  We guarantee each participant in our program an internship opportunity so that they can build the confidence and build their portfolio for gaining employment.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </React.Fragment>
        )
    }
};

export default InternshipsContent;
