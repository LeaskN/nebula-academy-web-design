import React from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import './CourseContent.css'

export const CourseContent = () => (
  <React.Fragment>
    <Container>
        <h1>Earn an Amazon Web Services Certification</h1>
        <p>Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. Kearn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions.</p>
        <Row >
            <Col xs={12} lg={6} xl={4} className="courseBackImage1">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Cloud Basics</Card.Title>
                        <Card.Text>
                            Intended for students who seek an overall understanding of cloud computing concepts. Independent of specific technical roles.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={6} xl={4} className="courseBackImage2">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Cloud Architect</Card.Title>
                        <Card.Text>
                            For students seeking to understand the fundamentals of building IT infrastructure on Amazon Webs Services, or AWS.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={12} xl={4} className="courseBackImage3">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Cloud Operations & Development</Card.Title>
                        <Card.Text>
                            Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  </React.Fragment>
)

