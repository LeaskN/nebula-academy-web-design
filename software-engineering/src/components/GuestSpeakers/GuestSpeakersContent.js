import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './GuestSpeakersContent.css'


class GuestSpeakers extends Component {
    state = {

    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <h1>Full Stack Development</h1>
                    <p>A <b>Web Application</b> is an application that is stored on a server in the cloud and is delivered over the internet through a web browser interface like Google Chrome. <b>Front-end development</b> manages client-side operations including everything that users visually see in an application. Front-end developers are also responsible for the look and feel of a site. <b>Back-end development</b> manages everything that users don’t see in their browser or application such as databases and server-side operations. A <b>full-stack engineer</b> is an engineer who can handle the front-end and back-end development such as database management, server maintenance, systems engineering, and client-side interfaces.</p>
                    <p>Participants may know where they want to focus from a skills development coming into a program, or have no idea, the program will support the decision process as participants skills evolve. No matter what path they decide to take or develop, all participants will understand both the primary responsibilities of each role and how the roles interact.</p>
                    <h3>AWS Certification:</h3>
                    <p>Our program is unique in that we integrate Amazon Web Services Cloud Practitioner Certification into our program.  We want to ensure our participants can differentiate themselves in applying to jobs post the program. The AWS Cloud Foundations course provides participants with an overall understanding of cloud computing concepts, independent of specific technical roles. It provides participants with a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="espositopat"><a className="LI-simple-link" href='https://www.linkedin.com/in/espositopat/'>Pat Esposito</a></div>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1>Job Placement</h1>
                                            <Row>
                                                {/* <Col xs={1} md={3}>
                                                    <img  src="https://www.codeplatoon.org/wp-content/uploads/2018/10/javasript.png" alt="" />
                                                </Col> */}
                                                <Col xs={10}md={12}>
                                                <p>Instead of only having our participants send out resumes, cover letters, and resumes, we have consistent local partners who are readily looking to hire our candidates.</p>
                                                <p>This partnership is a two-way street. The partners have trouble hiring motivated individuals with the skills that help in their work environment and we have a shortlist of local companies that are excited to hire our candidates.</p>
                                                <p>The clients give our participants tasks to do - build a new website, page, navbar, database, middleware, connections, etc... and this project is treated as the primary part of the interview process. This means that not only do our candidates see what the workforce looks like, but they are given an opportunity to impress the partner right from the start.</p>
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Career Readiness</h1>
                        <p>We aim to get our candidates placed. Unlike institutions that aim to educate without directing individuals towards a job we primarly work on ensuring our candidates get hired. Beyond our partners and connections, both local and national, we aim to get our students certifications, pass assessments, and create projects that will help with the hiring process.</p>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default GuestSpeakers;
