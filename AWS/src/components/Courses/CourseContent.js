import React from 'react';
import { Row, Card, Col, Container, Button } from 'react-bootstrap';
import './CourseContent.css'

export const CourseContent = () => (
  <React.Fragment>
    <Container>
        <h1>Earn an Amazon Web Services Certification</h1>
        <p>Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. Learn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions.</p>
        <Row>
            <Col xs={12} lg={4} xl={4} className="courseBackImage1">
                <Card className="overImage">
                    <Card.Body> 
                        <Card.Title>AWS Academy Cloud Foundations</Card.Title>
                        <Card.Text>
                            <i>Intended for students who seek an overall understanding of cloud computing concepts. Independent of specific technical roles.</i>
                        </Card.Text>
                        <Button variant="primary" className="courseButton">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} xl={4} className="courseBackImage2">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Architecting</Card.Title>
                        <Card.Text>
                            <i>For students seeking to understand the fundamentals of building IT infrastructure on Amazon Webs Services, or AWS.</i>
                        </Card.Text>
                        <Button variant="primary" className="courseButton">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} xl={4} className="courseBackImage3">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Operations & Development</Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                        <Button variant="primary" className="courseButton" style={{alignSelf:"center"}}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{marginTop: "1px"}}>
             <Col xs={12} lg={4} xl={4} className="courseBackImage3">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Developing</Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                        <Button variant="primary" className="courseButton">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
             <Col xs={12} lg={4} xl={4} className="courseBackImage3">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Data Analytics</Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                        <Button variant="primary" className="courseButton">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  </React.Fragment>
)

