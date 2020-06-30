import React from 'react';
import { Row, Card, Col, Container, Button } from 'react-bootstrap';
import './CourseContent.css'

export const CourseContent = () => (
  <React.Fragment>
    <Container>
        <h1>Prepare For Your Amazon Web Services Certification With Nebula Academy</h1>
        <p>Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. Learn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions.</p>
        <Row style={{flexWrap: "flex"}}>
            <Col  xs={12} lg={4} xl={4} className="courseBackImage1" style={{border:"5px solid white"}}>
                <Card className="overImage">
                    <Card.Body> 
                        <Card.Title>AWS Academy Cloud Foundations</Card.Title>
                        <Card.Text>
                            <i>Intended for students who seek an overall understanding of cloud computing concepts. Independent of specific technical roles.</i>
                        </Card.Text>
                        <div id="spacer"></div>
                        <Button className='bottom courseButton' href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=11903416" variant="secondary">Sign Up</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} xl={4} className="courseBackImage2" style={{border:"5px solid white",  }}>
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Architecting<span className="orange-text"><i> - Coming soon!</i></span>
                        </Card.Title>
                        <Card.Text>
                            <i>For students seeking to understand the fundamentals of building IT infrastructure on Amazon Webs Services, or AWS.</i>
                        </Card.Text>
                       <div id="spacer"></div>
                        <Button className='bottom courseButton' href="mailto:succeed@nebulaacademyny.com" variant="secondary">Get More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} xl={4} className="courseBackImage3" style={{border:"5px solid white",  }}>
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Operations & Development<span className="orange-text"><i> - Coming soon!</i></span></Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                       <div id="spacer"></div>
                        <Button className='bottom courseButton' href="mailto:succeed@nebulaacademyny.com" variant="secondary">Get More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{marginTop: "1px"}}>
             <Col xs={12} lg={4} xl={4} className="courseBackImage4" style={{border:"5px solid white",  }}>
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Cloud Developing<span className="orange-text"><i> - Coming soon!</i></span></Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                       <div id="spacer"></div>
                        <Button className='bottom courseButton' href="mailto:succeed@nebulaacademyny.com" variant="secondary">Get More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
             <Col xs={12} lg={4} xl={4} className="courseBackImage5" style={{border:"5px solid white",  }}>
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>AWS Academy Data Analytics<span className="orange-text"><i> - Coming soon!</i></span></Card.Title>
                        <Card.Text>
                            <i>Designed to prepare participants to pursue entry-level DevOps, support, and cloud operations roles.</i>
                        </Card.Text>
                       <div id="spacer"></div>
                        <Button className='bottom courseButton' href="mailto:succeed@nebulaacademyny.com" variant="secondary">Get More Info</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  </React.Fragment>
)

