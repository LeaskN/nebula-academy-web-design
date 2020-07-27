import React from 'react';
import { Container, Col, Row, Alert, Button, Tabs, Tab } from 'react-bootstrap';
// import Iframe from 'react-iframe';
import './RegistrationContent.css';
import image1 from '../../assets/6.1_AWS_Basics.jpg';
import image2 from '../../assets/6_AWS_Architect.jpg';
import image3 from '../../assets/nebula-developing.jpg';
import image4 from '../../assets/9_AWS_presenter.jpg'

const registrationContent = () => (
            <Container>
                {/* <p className="resgistrationMessage">
                    Please choose between the Student and Educator paths below: 
                </p> */}
                <Tabs 
                    defaultActiveKey="EDUCATOR" 
                    id="registrationTabs">
                    <Tab eventKey="EDUCATOR" title="EDUCATOR">
                        <div className="registrationContainer">
                        <Row>
                            <Col className="alignCenter">
                                <br/>
                                <h2 className="sectionTitle" style={{textAlign:'center'}}>Educator Registration</h2>
                                <p style={{textAlign:'center'}}>Take a look below at the AWS Academy Programs that we currently provide for educators.</p>
                                <p style={{textAlign:'center'}}>Questions? Contact us by e-mail at: <a href="mailto:succeed@nebulaacademyny.com">succeed@nebulaacademyny.com</a> or by phone at: 631-468-7477</p>
                            </Col>
                        </Row>
                        <Row className="educatorRegistrationCard">
                            <Col style={{margin:'auto'}} xs={12} lg={5}>
                                <img alt="image1" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={image4}></img> 
                                {/* src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png"></img> */}
                            </Col>
                            
                            <Col lg={7}>
                            <div className="textWrap">
                            <h3>AWS Accreditation Preparation Course- <b>Live Virtual</b></h3>
                            {/* <Alert variant="success" style={{textAlign:'center'}}>DUE TO THE COVID-19 OUTBREAK THIS COURSE PRICE HAS BEEN REDUCED TO $99</Alert> */}
                            <p>AWS Accreditation Preparation Course is intended for prospective learners who seek certification as AWS Cloud Foundation Educators. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                            <p>This course prepares you for the AWS Accreditation process. Read about AWS certification <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">here</a>.</p>
                            <div>
                                The live virtual session grants access to:
                                <ul>
                                <li><b>Weekly live classes led by Nebula Academy's Certified AWS Amazon Cloud Foundations instructors where participants can ask questions directly to the instructor</b></li>
                                <li><b>Recordings of the live classes for your individal review</b></li>
                                <li>AWS Amazon Cloud Foundations labs</li>
                                <li>AWS Amazon Cloud Foundations slides</li>
                                <li>AWS Amazon Cloud Foundations videos</li>
                                <li>AWS Amazon Cloud Foundations content</li>
                                <li>AWS Amazon Cloud Foundations practice questions</li>
                                <li>Nebula Academy's AWS Amazon Cloud Foundations Teams environment and AWS Amazon Cloud Foundations related resources</li>
                                <li>Nebula Academy's Videos covering all modules & content in detail</li> 
                                </ul>
                                </div>
                            </div>
                            <div id="spacer"></div>
                            
                            <Button className="bottom educatorRegistrationButton" variant="info" href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=15551859">Register</Button>
                            </Col>
                            
                        </Row>
                        </div> 
                    </Tab>

                    <Tab eventKey="STUDENT" title="STUDENT">
                        <div className="registrationContainer">
                            <Row>
                                <Col xs={12}>
                                    <Row>
                                        <Col className="alignCenter">
                                            <br/>
                                            <h2 className="sectionTitle" style={{textAlign:'center'}}>Student Registration</h2>
                                            <p className="textWarning"style={{textAlign:'center'}}> Student classes are not currently being offered but check back again at a later time. </p>
                                            <p style={{textAlign:'center'}}>Questions? Contact us by e-mail at: <a href="mailto:succeed@nebulaacademyny.com">succeed@nebulaacademyny.com</a> or by phone at: 631-468-7477</p>
                                        </Col>
                                    </Row>
                                    <Row className="registrationCard">
                                        <Alert variant="danger" style={{height: '100%', margin: '0px'}}>
                                            <Row>
                                                <Col style={{margin:'auto'}} xs={12} lg={5}>
                                                    <img alt="image1" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={image1}></img> 
                                                    {/* src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png"></img> */}
                                                </Col>
                                                <Col lg={7}>
                                                <div className="textWrap">
                                                <h3>AWS Academy Cloud Foundations - <b>Virtual</b></h3>
                                                <Alert variant="success" style={{textAlign:'center'}}>DUE TO THE COVID-19 OUTBREAK THIS COURSE PRICE HAS BEEN REDUCED TO $99</Alert>
                                                <p>AWS Academy Cloud Foundations is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                                                <p>This course prepares you for the AWS Cloud Practitioner Certification Exam. Read about the certification <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">here</a>.</p>
                                                <div>
                                                    The virtual session grants access to:
                                                    <ul>
                                                        <li><b>Live virtual office hours with Nebula Academy's Certified AWS Amazon Cloud Foundations instructors where participants can ask questions directly</b></li>
                                                        <li>AWS Amazon Cloud Foundations labs</li>
                                                        <li>AWS Amazon Cloud Foundations slides</li>
                                                        <li>AWS Amazon Cloud Foundations videos</li>
                                                        <li>AWS Amazon Cloud Foundations content</li>
                                                        <li>AWS Amazon Cloud Foundations practice questions</li>
                                                        <li>Nebula Academy's AWS Amazon Cloud Foundations Teams environment and AWS Amazon Cloud Foundations related resources</li>
                                                        <li>Nebula Academy's Videos covering all modules & content in detail</li> 
                                                    </ul>
                                                </div>
                                                </div>
                                                <div id="spacer"></div>
                                                <Button className="bottom" variant="dark" disabled href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=11903416"><del>Register</del></Button>
                                                </Col>
                                            </Row>
                                        </Alert>
                                    </Row>
                                    <Row className="registrationCard">
                                        <Alert variant="danger" style={{height: '100%', margin: '0px'}}> 
                                            <Row>  
                                                <Col style={{margin:'auto'}} xs={12} lg={5}>
                                                    <img alt="image2" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={image2}></img>
                                                </Col>
                                                <Col lg={7}>
                                                    <div className="textWrap">
                                                    <h3>AWS Academy Cloud Foundations - <b>Live Virtual</b></h3>
                                                    <p>AWS Academy Cloud Foundations (Amazon Cloud Foundations) is intended for students who seek an overall understanding of cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support.</p>
                                                    <p>This course prepares you for the AWS Cloud Practitioner Certification Exam. Read about the certification <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">here</a>.</p>
                                                    <div>
                                                        The live virtual session grants access to:
                                                        <ul>
                                                            <li><b>Weekly live classes led by Nebula Academy's Certified AWS Amazon Cloud Foundations instructors where participants can ask questions directly to the instructor</b></li>
                                                            <li><b>Recordings of the live classes for your individal review</b></li>
                                                            <li>AWS Amazon Cloud Foundations labs</li>
                                                            <li>AWS Amazon Cloud Foundations slides</li>
                                                            <li>AWS Amazon Cloud Foundations videos</li>
                                                            <li>AWS Amazon Cloud Foundations content</li>
                                                            <li>AWS Amazon Cloud Foundations practice questions</li>
                                                            <li>Nebula Academy's AWS Amazon Cloud Foundations Teams environment and AWS Amazon Cloud Foundations related resources</li>
                                                            <li>Nebula Academy's Videos covering all modules & content in detail</li> 
                                                        </ul>
                                                    </div>
                                                    </div>
                                                    <div id="spacer"></div>
                                                    <Button className="bottom"
                                                    variant="dark" disabled  
                                                    href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10267054"><del>Register</del></Button>
                                                </Col>
                                            </Row> 
                                        </Alert>
                                    </Row>
                                    <Row className="registrationCard">
                                        <Alert variant="danger" style={{height: '100%', margin: '0px'}}>
                                            <Row>
                                                <Col style={{margin:'auto'}} xs={12} lg={5}>
                                                    <img alt="image3" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={image3}></img>
                                                </Col>
                                                <Col lg={7}>
                                                    <div className="textWrap">
                                                    <h3>AWS Academy Cloud Foundations - <b>In Person</b></h3>
                                                    <h4> COVID-19 Alert:</h4>
                                                    <p>Unfortunately, due to the global COVID-19 outbreak, Nebula Academy is temporarily on hold our in person AWS training sessions as our students' safety is our main concern.
                                                    That said, the Nebula team is offering both Virtual and Live Virtual courses to provide our students with a flexible and comprehensive learning experience regardless of the situation.</p>
                                                    <hr></hr>
                                                    <p className="mb-0">
                                                    Please continue to stay healthy and safe. 
                                                    </p>
                                                    <br></br>
                                                    </div>
                                                    <div id="spacer"></div>
                                                    <Button className="bottom" variant="dark" disabled href="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10267054"><del>Register</del></Button>
                                                </Col>
                                            </Row>
                                        </Alert>
                                    </Row>

                                    {/* <Row>
                                        <Col className="registrationPadding" xs={12} lg={12}>
                                            <br/>
                                            <h3>AWS Academy Cloud Foundations - Virtual</h3>
                                            <Iframe 
                                                src="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=11903416" 
                                                width="100%"
                                                id="myId"
                                                className="form"
                                                display="initial"
                                                position="relative"
                                                height="400px">
                                            </Iframe>	
                                        </Col>
                                        <Col className="registrationPadding" xs={12} lg={12}>
                                            <br/>
                                            <h3>AWS Academy Cloud Foundations - Live Virtual</h3>
                                            <Iframe 
                                                src="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10267054" 
                                                width="100%"
                                                id="myId"
                                                className="form"
                                                display="initial"
                                                position="relative"
                                                height="400px">
                                            </Iframe>	
                                        </Col>
                                        <Col className="registrationPadding" xs={12} lg={12}>
                                            <br/>
                                            <h3>AWS Academy Cloud Foundations - In Person (Read COVID-19 Alert Below)</h3>
                                            <Iframe 
                                                src="https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=10096510" 
                                                width="100%"
                                                id="myId"
                                                className="form"
                                                display="initial"
                                                position="relative"
                                                height="400px">
                                            </Iframe>	
                                            <br/>
                                        </Col>
                                    </Row> */}
                                    
                                    </Col>
                                </Row>
                            </div>
                        </Tab>                
                </Tabs>
            </Container>
        )


export default registrationContent;