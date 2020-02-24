import React, { Component }from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import './RegisterContent.css'

class RegisterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Container>
        <h1>Register:</h1>
        <Row className="programRow"style={{color:"white", marginBottom: '20px'}}>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile1">
                    <div>
                        <h3>Science Behind Learning</h3>
                        <p>The Science Behind Learning Certification program is a 2-day in-person professional development program dedicated to Education professionals. This program is designed for teachers, administrators, and anyone working with students and adults in a learning program.  Upon completing this learning experience, participants will have the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive out-comes. Understanding the latest cognitive neuroscience research participants learn the science behind how we learn and how that knowledge can be utilized to shape more engaging learning experiences.</p>
                        <div id="spacer" style={{height: '90px'}}></div>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=13071791" variant="light">Register</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered" href="/sbls" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile2">
                    <div>
                        <h3>STEAM Coach</h3>
                        <p>This program is designed to engage educators with hands-on activities and exercises using design thinking as a foundation for developing curriculum and student centered learning experiences Participants learn how to incorporate 21st century learning approaches with rubrics that are guided by a design thinking framework. Educators are provided opportunities to gain experience in all aspects of an entrepreneurial framework, and how to engage students in this process within the classroom structure. The content can be approached in several different ways and is easily adaptable to a variety of situations. Each unit contains suggested sample activities, but instructors are provided clear learning topics to allow them the freedom to develop their own exercises. Likewise, sample student objectives are suggested but the instructor has the freedom to create specific objectives to match their own exercises and assignments.</p>
                        <div id="spacer" style={{height: '90px'}}></div>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10096466" variant="light">Register</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered" href="/STEAMCoach" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={6} xl={4}>
                <div className="programTile3">
                    <div>
                        <h3>Computer Science Teaching Certification</h3>
                        <p>Through our Computer Science Certification, we help new and existing teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning.</p>
                        <div id="spacer" style={{height: '90px'}}></div>
                        <Button style={{marginBottom: '75px'}} className="bottom contentCentered"  href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=13072072" variant="light">Register</Button>
                        <Button style={{marginBottom: '25px'}} className="bottom contentCentered"  href="/cstc" variant="light">Learn More</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
        )
    }
};

export default RegisterContent;